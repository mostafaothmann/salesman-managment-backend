import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { GiftVisit } from './entities/gift-visit.entity';
import { CreateGiftVisitDto, FilterGiftVisitProps } from './dto/create-gift-visit.dto';
import { UpdateGiftVisitDto } from './dto/update-gift-visit.dto';


@Injectable()
export class GiftVisitService {
  constructor(
    @InjectRepository(GiftVisit)
    private readonly giftVisitRepo: Repository<GiftVisit>,
    private readonly dataSource: DataSource
  ) { }

  create(createGiftVisitDto: CreateGiftVisitDto): Promise<GiftVisit> {
    const gift_visit = this.giftVisitRepo.create(createGiftVisitDto);
    return this.giftVisitRepo.save(gift_visit);
  }

  async getAll(): Promise<GiftVisit[]> {
    return await this.giftVisitRepo.find();
  }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`select * from gift_visit
       LIMIT ${limit} OFFSET ${offset};
       `);
    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM gift_visit;
  `);
    const total = parseInt(totalResult[0].total, 10);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }


  async findAllPharmacists(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`select gv.id,gv.quantity,gv.visit_id,gv.type_id,gv.created_at from gift_visit as gv INNER JOIN visit as v on gv.visit_id = v.id 
      INNER JOIN pharmacist as p on v.pharmacist_id=p.id;
       `);
    const totalResult = await this.dataSource.query(`
    select COUNT(*) from gift_visit as gv INNER JOIN visit as v on gv.visit_id = v.id 
      INNER JOIN pharmacist as p on v.pharmacist_id =p.id;
  `);
    const total = parseInt(totalResult[0].total, 10);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }


  async findAllDoctors(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`select gv.id,gv.quantity,gv.visit_id,gv.type_id,gv.created_at from gift_visit as gv INNER JOIN visit as v on gv.visit_id = v.id 
      INNER JOIN doctor as d on v.doctor_id =d.id
       LIMIT ${limit} OFFSET ${offset};
       `);
    const totalResult = await this.dataSource.query(`
    select COUNT(*) from gift_visit as gv INNER JOIN visit as v on gv.visit_id = v.id 
      INNER JOIN doctor as d on v.doctor_id =d.id;
  `);
    const total = parseInt(totalResult[0].total, 10);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  findOne(id: number): Promise<GiftVisit | null> {
    return this.giftVisitRepo.findOneBy({ id });
  }

  async update(id: number, updateGiftVisitDto: UpdateGiftVisitDto): Promise<GiftVisit | null> {
    await this.giftVisitRepo.update(id, updateGiftVisitDto);
    return this.giftVisitRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.giftVisitRepo.delete(id);
  }



  async filter(
    filters: FilterGiftVisitProps,
  ): Promise<Record<string, any>> {

    const query = this.giftVisitRepo
      .createQueryBuilder('gv')
      .select('gv.id', 'id')
      .addSelect('gv.base_gift_id', 'base_gift_id')
      .addSelect('gv.quantity', 'quantity')
      .addSelect('gv.created_at', 'created_at')
      .addSelect('gv.visit_id', 'visit_id')

    if (!isNaN(filters.filter_base_gift_id) && filters.filter_base_gift_id != -1) {
      query.andWhere(
        `gv.base_gift_id = :giftBaseId`,
        { giftBaseId: filters.filter_base_gift_id },
      );
    }

    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity != -1) {
      query.andWhere(
        `gv.quantity >= :minQun`,
        { minQun: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_max_quantity) && filters.filter_max_quantity != 101) {
      query.andWhere(
        `gv.quantity <= :maxQun`,
        { maxQun: filters.filter_min_quantity },
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
}
