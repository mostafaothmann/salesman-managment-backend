import { Injectable } from '@nestjs/common';
import { CreateSampleDto, FilterSampleProps } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sample } from './entities/sample.entity';
import { DataSource, Repository } from 'typeorm';


@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample)
    private readonly sampleRepo: Repository<Sample>,
    private readonly dataSource: DataSource
  ) { }

  create(createSampleDto: CreateSampleDto): Promise<Sample> {
    const sample = this.sampleRepo.create(createSampleDto);
    return this.sampleRepo.save(sample);
  }

  async getAll(): Promise<Sample[]> {
    return await this.sampleRepo.find();
  }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`select * from sample
       LIMIT ${limit} OFFSET ${offset};
       `);
    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM sample;
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
    const data = await this.dataSource.query(`select s.id,s.quantity,s.visit_id,s.type_id,s.created_at from sample as s INNER JOIN visit as v on s.visit_id = v.id 
      INNER JOIN pharmacist as p on v.pharmacist_id=p.id;
       `);
    const totalResult = await this.dataSource.query(`
    select COUNT(*) from sample as s INNER JOIN visit as v on s.visit_id = v.id 
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
    const data = await this.dataSource.query(`select s.id,s.quantity,s.visit_id,s.type_id,s.created_at from sample as s INNER JOIN visit as v on s.visit_id = v.id 
      INNER JOIN doctor as d on v.doctor_id =d.id
       LIMIT ${limit} OFFSET ${offset};
       `);
    const totalResult = await this.dataSource.query(`
    select COUNT(*) from sample as s INNER JOIN visit as v on s.visit_id = v.id 
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

  findOne(id: number): Promise<Sample | null> {
    return this.sampleRepo.findOneBy({ id });
  }

  async update(id: number, updateSampleDto: UpdateSampleDto): Promise<Sample | null> {
    await this.sampleRepo.update(id, updateSampleDto);
    return this.sampleRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.sampleRepo.delete(id);
  }



  async filter(
    filters: FilterSampleProps,
  ): Promise<Record<string, any>> {

    const query = this.sampleRepo
      .createQueryBuilder('s')
      .select('s.id', 'id')
      .addSelect('s.type_id', 'type_id')
      .addSelect('s.quantity', 'quantity')
      .addSelect('s.created_at', 'created_at')
      .addSelect('s.visit_id', 'visit_id')

    if (!isNaN(filters.filter_type_id) && filters.filter_type_id != -1) {
      query.andWhere(
        `s.type_id = :typeId`,
        { typeId: filters.filter_type_id },
      );
    }

    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity != -1) {
      query.andWhere(
        `s.quantity >= :minQun`,
        { minQun: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_max_quantity) && filters.filter_max_quantity != 101) {
      query.andWhere(
        `s.quantity <= :maxQun`,
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
