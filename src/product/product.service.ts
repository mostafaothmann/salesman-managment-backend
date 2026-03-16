import { Injectable } from '@nestjs/common';
import { CreateProductDto, FilterProductProps } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeService } from 'src/type/type.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    private readonly typeService: TypeService,
    private readonly dataSource: DataSource
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const type = await this.typeService.findOne(createProductDto?.type_id || 0);
    createProductDto.price_for_piece =
      (
        (type?.price_for_piece || 0)
      )
    createProductDto.base_total_price =
      (
        ((createProductDto?.base_quantity || 0) * (type?.price_for_piece || 0))
      )
    createProductDto.total_quantity =
      (
        (createProductDto?.base_quantity || 0) - (createProductDto?.return_quantity || 0)
      )
    createProductDto.return_total_price =
      (
        ((createProductDto?.return_quantity || 0)
          * createProductDto?.price_for_piece *
          (type?.return_discount || 0)) / 100
      )
    createProductDto.total_price =
      (
        createProductDto?.base_total_price - createProductDto?.return_total_price
      )
    createProductDto.total_delivery_percentage =
      (
        ((type?.delivery_percentage || 0) *
          (createProductDto?.base_quantity || 0) *
          (type?.price_for_piece || 0)) / 100
      )
    createProductDto.delivery_percentage_for_piece =
      (
        (type?.delivery_percentage || 0)
      )
    createProductDto.percentage_for_piece =
      (
        type?.percentage || 0
      )
    createProductDto.return_percentage =
      (
        ((type?.return_discount || 0) *
          (createProductDto?.return_quantity || 0) *
          (type?.price_for_piece || 0)) / 100
      )
    createProductDto.base_percentage =
      (
        ((type?.percentage || 0) *
          (createProductDto?.base_quantity || 0) *
          (type?.price_for_piece || 0)) / 100
      )
    createProductDto.total_percentage =
      (
        createProductDto?.base_percentage - createProductDto?.return_percentage
      )
    createProductDto.return_discount =
      (
        (type?.return_discount || 0)
      )

    const offer = this.productRepo.create(createProductDto);
    const quantity = (type?.quantity || 0) - createProductDto?.total_quantity
    this.typeService.update((type?.id || 0), { ...type, quantity: quantity })
    return this.productRepo.save(offer);


    const product = this.productRepo.create(createProductDto);
    return this.productRepo.save(product);
  }


  async getPreview() {
    return await this.dataSource.query(`
    SELECT p.id,p.order_id,p.type_id,
    p.base_quantity, p.return_quantity, p.total_quantity,
    p.base_total_price,p.return_total_price, p.total_price,
    p.base_percentage,p.return_percentage,p.total_percentage,
    p.total_delivery_percentage
    FROM product p
  `);
  }



  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`
    SELECT p.id,p.created_at,p.order_id,p.type_id,p.price_for_piece,
    p.base_quantity, p.return_quantity, p.total_quantity,
    p.base_total_price,p.return_total_price, p.total_price,p.return_discount,
    p.base_percentage,p.return_percentage,p.total_percentage,
    p.percentage_for_piece,p.delivery_percentage_for_piece,
    p.total_delivery_percentage
    FROM product p
    LIMIT ${limit} OFFSET ${offset};
  `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM product;
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
    filters: FilterProductProps,
  ): Promise<Record<string, any>> {
    const query = this.productRepo.createQueryBuilder('p')
      .select('p.id', 'id')
      .addSelect('p.return_discount', 'return_discount')
      .addSelect('p.price_for_piece', 'price_for_piece')
      .addSelect('p.return_discount', 'return_discount')
      .addSelect('p.base_quantity', 'base_quantity')
      .addSelect('p.return_quantity', 'return_quantity')
      .addSelect('p.total_quantity', 'total_quantity')
      .addSelect('p.percentage_for_piece', 'percentage_for_piece')
      .addSelect('p.total_percentage', 'total_percentage')
      .addSelect('p.base_percentage', 'base_percentage')
      .addSelect('p.return_percentage', 'return_percentage')
      .addSelect('p.total_delivery_percentage', 'total_delivery_percentage')
      .addSelect('p.delivery_percentage_for_piece', 'delivery_percentage_for_piece')
      .addSelect('p.total_price', 'total_price')
      .addSelect('p.return_total_price', 'return_total_price')
      .addSelect('p.base_total_price', 'base_total_price')
      .addSelect('p.type_id', 'type_id')
      .addSelect('p.order_id', 'order_id')
      .addSelect('p.created_at', 'created_at')


    if (!isNaN(filters.filter_type_id) && filters.filter_type_id != 0) {
      query.andWhere(
        `p.type_id = :typeId`,
        { typeId: filters.filter_type_id },
      );
    }

    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity > 0) {
      query.andWhere(
        `p.total_quantity >= :minQuantity`,
        { minQuantity: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_max_quantity) && filters.filter_max_quantity > 0) {
      query.andWhere(
        `p.total_quantity <= :maxQuantity`,
        { maxQuantity: filters.filter_max_quantity },
      );
    }

    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity > 0) {
      query.andWhere(
        `p.total_quantity >= :minQuantity`,
        { minQuantity: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_min_total_price) && filters.filter_min_total_price > 0) {
      query.andWhere(
        `p.total_price  >= :minTotal`,
        { minTotal: filters.filter_min_total_price },
      );
    }

    if (!isNaN(filters.filter_max_total_price) && filters.filter_max_total_price > 0) {
      query.andWhere(
        `p.total_price  <= :maxTotal`,
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


  async findOne(id: number): Promise<Product | null> {
    return await this.productRepo.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product | null> {
    const productBefore = await this.findOne(id)
    const type = await this.typeService.findOne(updateProductDto?.type_id || 0);

    updateProductDto.total_quantity =
      (
        (updateProductDto?.base_quantity || 0) - (updateProductDto?.return_quantity || 0)
      )
    updateProductDto.return_total_price =
      (
        ((updateProductDto?.return_quantity || 0)
          * (updateProductDto?.price_for_piece || 0) *
          (type?.return_discount || 0)) / 100
      )
    updateProductDto.total_price =
      (
        (updateProductDto?.base_total_price || 0) -
        updateProductDto?.return_total_price
      )
    updateProductDto.return_percentage =
      (
        ((type?.return_discount || 0) *
          (updateProductDto?.return_quantity || 0) *
          (type?.price_for_piece || 0)) / 100
      )
    updateProductDto.total_percentage =
      (
        (updateProductDto?.base_percentage || 0) - updateProductDto?.return_percentage
      )

    const return_quantity = (updateProductDto?.return_quantity || 0) - (productBefore?.return_quantity || 0)
    this.typeService.update((type?.id || 0), { ...type, quantity: ((type?.quantity || 0) + (return_quantity || 0)) })
    await this.productRepo.update(id, updateProductDto);
    return this.productRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productRepo.delete(id);
  }
}

