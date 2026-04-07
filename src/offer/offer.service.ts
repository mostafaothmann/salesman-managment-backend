import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Offer } from './entities/offer.entity';
import { CreateOfferDto, FilterOfferProps } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { BaseOffer } from 'src/base-offer/entities/base-offer.entity';
import { BaseOfferService } from 'src/base-offer/base-offer.service';
import { TypeService } from 'src/type/type.service';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepo: Repository<Offer>,
    private readonly baseOfferService: BaseOfferService,
    private readonly typeService: TypeService,
    private readonly dataSource: DataSource
  ) { }

  async show() {
    return this.dataSource.query(`Select o.*,bf.number_of_gifts,bf.number_of_pieces from offer o INNER JOIN base_offer bf on o.base_offer_id=bf.id `)
  }

  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const baseOffer = await this.baseOfferService.findOne(createOfferDto?.base_offer_id);
    const type = await this.typeService.findOne(baseOffer?.type_id || 0);

    createOfferDto.base_quantity =
      (
        ((baseOffer?.number_of_gifts || 0) +
          (baseOffer?.number_of_pieces || 0))
      )

    createOfferDto.price_for_piece =
      (
        ((baseOffer?.number_of_pieces || 0) *
          (type?.price_for_piece || 0)) / createOfferDto?.base_quantity
      )

    createOfferDto.base_total_price =
      (
        ((baseOffer?.number_of_pieces || 0) * (type?.price_for_piece || 0))
      )
    createOfferDto.total_quantity =
      (
        createOfferDto?.base_quantity - createOfferDto?.return_quantity
      )
    createOfferDto.return_total_price =
      (
        createOfferDto?.return_quantity * createOfferDto?.price_for_piece
      )
    createOfferDto.total_price =
      (
        createOfferDto?.base_total_price - createOfferDto?.return_total_price
      )
    createOfferDto.total_delivery_percentage =
      (
        ((type?.delivery_percentage || 0) * (baseOffer?.number_of_pieces || 0) * (type?.price_for_piece || 0)) / 100
      )
    createOfferDto.delivery_percentage_for_piece =
      (
        (type?.delivery_percentage || 0)
      )
    createOfferDto.percentage_for_piece =
      (
        type?.percentage || 0
      )
    createOfferDto.return_percentage =
      (
        ((type?.return_discount || 0) * (createOfferDto?.return_quantity || 0) * (type?.price_for_piece || 0)) / 100
      )
    createOfferDto.base_percentage =
      (
        ((type?.percentage || 0) * (baseOffer?.number_of_pieces || 0) * (type?.price_for_piece || 0)) / 100
      )
    createOfferDto.total_percentage =
      (
        createOfferDto?.base_percentage - createOfferDto?.return_percentage
      )
    createOfferDto.return_discount =
      (
        (type?.return_discount || 0)
      )

    const offer = this.offerRepo.create(createOfferDto);
    const quantity = (type?.quantity || 0) - createOfferDto?.total_quantity
    this.typeService.update((type?.id || 0), { ...type, quantity: quantity })
    return this.offerRepo.save(offer);
  }

  async getPreview(id: number) {
    return await this.dataSource.query(`
      SELECT bf.number_of_gifts,bf.number_of_pieces,o.id,o.created_at,o.order_id,o.price_for_piece,bf.type_id,
    o.base_quantity, o.return_quantity, o.total_quantity,
    o.base_total_price,o.return_total_price, o.total_price,o.return_discount,
    o.base_percentage,o.return_percentage,o.total_percentage,
    o.percentage_for_piece,o.delivery_percentage_for_piece,
    o.total_delivery_percentage
    FROM offer o
    INNER JOIN base_offer bf ON bf.id = o.base_offer_id
    WHERE o.order_id = ${id};  
  `);
  }


  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`
    SELECT o.id,o.created_at,o.order_id,o.price_for_piece,
    o.base_quantity, o.return_quantity, o.total_quantity,
    o.base_total_price,o.return_total_price, o.total_price,o.return_discount,
    o.base_percentage,o.return_percentage,o.total_percentage,
    o.percentage_for_piece,o.delivery_percentage_for_piece,
    o.total_delivery_percentage,bf.number_of_pieces,bf.number_of_gifts,bf.type_id
    FROM offer o INNER JOIN base_offer bf on o.base_offer_id = bf.id 
    LIMIT ${limit} OFFSET ${offset};
  `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM offer;
  `);
    const total = parseInt(totalResult[0].total, 10);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async filter(
    filters: FilterOfferProps,
  ): Promise<Record<string, any>> {
    const query = this.offerRepo.createQueryBuilder('o')
      .select('o.id', 'id')
      .addSelect('o.return_discount', 'return_discount')
      .addSelect('o.price_for_piece', 'price_for_piece')
      .addSelect('o.return_discount', 'return_discount')
      .addSelect('o.base_quantity', 'base_quantity')
      .addSelect('o.return_quantity', 'return_quantity')
      .addSelect('o.total_quantity', 'total_quantity')
      .addSelect('o.percentage_for_piece', 'percentage_for_piece')
      .addSelect('o.total_percentage', 'total_percentage')
      .addSelect('o.base_percentage', 'base_percentage')
      .addSelect('o.return_percentage', 'return_percentage')
      .addSelect('o.total_delivery_percentage', 'total_delivery_percentage')
      .addSelect('o.delivery_percentage_for_piece', 'delivery_percentage_for_piece')
      .addSelect('o.total_price', 'total_price')
      .addSelect('o.return_total_price', 'return_total_price')
      .addSelect('o.base_total_price', 'base_total_price')
      .addSelect('o.base_offer_id', 'base_offer_id')
      .addSelect('o.order_id', 'order_id')
      .addSelect('o.created_at', 'created_at')


    if (!isNaN(filters.filter_base_offer_id) && filters.filter_base_offer_id != 0) {
      query.andWhere(
        `o.base_offer_id = :baseOfferId`,
        { baseOfferId: filters.filter_base_offer_id },
      );
    }

    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity > 0) {
      query.andWhere(
        `o.total_quantity >= :minQuantity`,
        { minQuantity: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_max_quantity) && filters.filter_max_quantity > 0) {
      query.andWhere(
        `o.total_quantity <= :maxQuantity`,
        { maxQuantity: filters.filter_max_quantity },
      );
    }

    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity > 0) {
      query.andWhere(
        `o.total_quantity >= :minQuantity`,
        { minQuantity: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_min_total_price) && filters.filter_min_total_price > 0) {
      query.andWhere(
        `o.total_price  >= :minTotal`,
        { minTotal: filters.filter_min_total_price },
      );
    }

    if (!isNaN(filters.filter_max_total_price) && filters.filter_max_total_price > 0) {
      query.andWhere(
        `o.total_price  <= :maxTotal`,
        { maxTotal: filters.filter_max_total_price },
      );
    }
    // Pagination
    filters.limit = filters.limit > 100 ? 100 : filters.limit;
    filters.page = filters.page < 1 ? 1 : filters.page;
    const skip = (filters.page - 1) * filters.limit;
    query.skip(skip).take(filters.limit);
    const [data, total] = await Promise.all([
      query.getRawMany(),
      query.clone().getCount(),
    ]);
    return {
      data,
      total,
      page: filters.page,
      lastPage: Math.ceil(total / filters.limit),
    };
  }

  findOne(id: number): Promise<Offer | null> {
    return this.offerRepo.findOneBy({ id });
  }

  async update(id: number, updateOfferDto: UpdateOfferDto): Promise<Offer | null> {
    console.log("offer", updateOfferDto);
    const offerBefore = await this.findOne(id)
    const baseOffer = await this.baseOfferService.findOne((updateOfferDto?.base_offer_id || 0));
    const type = await this.typeService.findOne(baseOffer?.type_id || 0);
    updateOfferDto.total_quantity =
      (
        (updateOfferDto?.base_quantity || 0) - (updateOfferDto?.return_quantity || 0)
      )
    updateOfferDto.return_total_price =
      (
        ((updateOfferDto?.return_quantity || 0) *
          (updateOfferDto?.price_for_piece || 0) *
          (type?.return_discount || 0)) / 100
      )
    updateOfferDto.total_price =
      (
        (updateOfferDto?.base_total_price || 0) - updateOfferDto?.return_total_price
      )
    updateOfferDto.return_percentage =
      (
        ((updateOfferDto?.return_discount || 0) * (updateOfferDto?.return_quantity || 0) * (updateOfferDto?.price_for_piece || 0)) / 100
      )
    updateOfferDto.total_percentage =
      (
        (updateOfferDto?.base_percentage || 0) - updateOfferDto?.return_percentage
      )

    const return_quantity = (updateOfferDto?.return_quantity || 0) - (offerBefore?.return_quantity || 0)
    this.typeService.update((type?.id || 0), { ...type, quantity: ((type?.quantity || 0) + (return_quantity || 0)) })
    await this.offerRepo.update(id, updateOfferDto);
    return this.offerRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.offerRepo.delete(id);
  }
}
