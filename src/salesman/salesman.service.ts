import { Injectable } from '@nestjs/common';
import { CreateSalesmanDto, FilterSalesmanProps } from './dto/create-salesman.dto';
import { UpdateSalesmanDto } from './dto/update-salesman.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salesman } from './entities/salesman.entity';
import { DataSource, Repository } from 'typeorm';
import { encodePassword } from 'src/auth/utils.ts/bcrypt';

@Injectable()
export class SalesmanService {

  constructor(
    @InjectRepository(Salesman)
    private readonly salesmanRepo: Repository<Salesman>,
    private readonly dataSource: DataSource
  ) { }

  create(createSalesmanDto: CreateSalesmanDto): Promise<Salesman> {
    createSalesmanDto.password = encodePassword(createSalesmanDto.password)
    const salesman = this.salesmanRepo.create(createSalesmanDto);
    return this.salesmanRepo.save(salesman);
  }


  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;

    const data = await this.dataSource.query(`
    SELECT s.id, s.first_name, s.last_name, s.governorate_id,s.leader_id,
           s.lat, s.lan, s.phone_number, s.telephone_number,
           s.city_id, s.area_id, s.street_id,s.created_at,s.account_status_id
           ,s.account_type_id
    FROM salesman s
    LIMIT ${limit} OFFSET ${offset};
  `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM salesman;
  `);
    const total = parseInt(totalResult[0].total, 10);

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  findByEmail(email: string): Promise<Salesman | null> {
    return this.salesmanRepo.findOneBy({ email });
  }

  findOne(id: number): Promise<Salesman | null> {
    return this.salesmanRepo.findOneBy({ id });
  }

  async update(id: number, updateSalesmanDto: UpdateSalesmanDto): Promise<Salesman | null> {
    await this.salesmanRepo.update(id, updateSalesmanDto);
    return this.salesmanRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.salesmanRepo.delete(id);
  }


  async filter(
    filters: FilterSalesmanProps,
  ): Promise<Record<string, any>> {

    const query = this.salesmanRepo.createQueryBuilder('salesman')
      .select('salesman.id', 'id')
      .addSelect('salesman.lan', 'lan')
      .addSelect('salesman.lat', 'lat')
      .addSelect('salesman.first_name', 'first_name')
      .addSelect('salesman.last_name', 'last_name')
      .addSelect('TIMESTAMPDIFF(YEAR,salesman.birth_date,CURDATE())', 'age')
      .addSelect('TIMESTAMPDIFF(YEAR,salesman.created_at,CURDATE())', 'working_time_length')
      .addSelect('salesman.city_id', 'city_id')
      .addSelect('salesman.area_id', 'area_id')
      .addSelect('salesman.street_id', 'street_id')
      .addSelect('salesman.phone_number', 'phone_number')
      .addSelect('salesman.account_type_id', 'account_type_id')
      .addSelect('salesman.leader_id', 'leader_id')
      .addSelect('salesman.account_status_id', 'account_status_id')
      .addSelect('salesman.telephone_number', 'telephone_number');

    if (filters.filter_first_name || filters.filter_last_name) {
      const search = filters.filter_first_name || filters.filter_last_name;

      query.andWhere(
        `(salesman.first_name LIKE :search 
      OR salesman.last_name LIKE :search)`,
        { search: `%${search}%` },
      );
    }

    if (!isNaN(filters.filter_account_status_id) && filters.filter_account_status_id != 0) {
      query.andWhere(
        `salesman.account_status_id = :accountStatusId`,
        { accountStatusId: filters.filter_account_status_id },
      );
    }


    if (!isNaN(filters.filter_account_type_id) && filters.filter_account_type_id != 0) {
      query.andWhere(
        `salesman.account_type_id = :accountTypeId`,
        { accountTypeId: filters.filter_account_type_id },
      );
    }

    if (!isNaN(filters.filter_city_id) && filters.filter_city_id != 0) {
      query.andWhere(
        `salesman.city_id = :cityId`,
        { cityId: filters.filter_city_id },
      );
    }

    if (!isNaN(filters.filter_area_id) && filters.filter_area_id != 0) {
      query.andWhere(
        `salesman.area_id = :areaId`,
        { areaId: filters.filter_area_id },
      );
    }

    if (!isNaN(filters.filter_street_id) && filters.filter_street_id != 0) {
      query.andWhere(
        `salesman.street_id = :streetId`,
        { streetId: filters.filter_street_id },
      );
    }

    if (!isNaN(filters.filter_min_time) && filters.filter_min_time >= 0) {
      query.andWhere(
        `salesman.created_at <= DATE_SUB(CURDATE(), INTERVAL :minTime YEAR)`,
        { minTime: filters.filter_min_time },
      );
    }

    if (!isNaN(filters.filter_max_time) && filters.filter_max_time <= 30) {
      query.andWhere(
        `salesman.created_at >= DATE_SUB(CURDATE(), INTERVAL :maxTime YEAR)`,
        { maxTime: filters.filter_max_time },
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
    console.log(filters)
    console.log(query.getQueryAndParameters())
    return {
      data,
      total,
      page: filters.page,
      lastPage: Math.ceil(total / filters.limit),
    };
  }
  async getNames(): Promise<{ first_name: string, last_name: string }[] | []> {
    return await this.dataSource.query(`select s.first_name,s.id,s.last_name from salesman as s `)
  }


  //for Profile Page
  async getDoctorSamples(id: number): Promise<void> {
    return await this.dataSource.query(`select s.*,v.salesman_id,v.doctor_id from sample s  INNER JOIN visit v on s.visit_id = v.id where v.doctor_id=${id} AND v.typeC='doctor'`)
  }

  async getPharmacistSamples(id: number): Promise<void> {
    return await this.dataSource.query(`select s.*,v.salesman_id,v.pharmacist_id from sample s  INNER JOIN visit v on s.visit_id = v.id where v.doctor_id=${id} AND v.typeC='pharmacist'`)
  }

  async getDoctorVisits(id: number): Promise<void> {
    return await this.dataSource.query(`select v.* from visit v where v.typeC='doctor' and v.salesman_id=${id}`)
  }

  async getPharmacistVisits(id: number): Promise<void> {
    return await this.dataSource.query(`select v.* from visit v where v.typeC='pharmacist' and v.salesman_id=${id}`)
  }

  async getDoctorGifts(id: number): Promise<void> {
    return await this.dataSource.query(`select bg.name,gv.*,v.doctor_id from gift_visit gv INNER JOIN visit v on gv.visit_id = v.id  
      INNER JOIN base_gift bg on bg.id= gv.base_gift_id where v.salesman_id=${id} AND v.typeC='doctor'`)
  }

  async getPharmacistGifts(id: number): Promise<void> {
    return await this.dataSource.query(`select bg.name,gv.*,v.pharmacist_id from gift_visit gv INNER JOIN visit v on gv.visit_id = v.id  
      INNER JOIN base_gift bg on bg.id= gv.base_gift_id where v.salesman_id=${id} AND v.typeC='pharmacist'`)
  }

  async getOrders(id: number): Promise<void> {
    return await this.dataSource.query(`select o.* from \`order\` o where o.salesman_id=${id}`)
  }

  async getAreas(id: number): Promise<void> {
    return await this.dataSource.query(`select sa.* from salesman_area sa where sa.salesman_id=${id}`)
  }

  //for Application
  async getDoctors(id: number): Promise<void> {
    return await this.dataSource.query(`select d.* from doctor d INNER JOIN salesman_area sa 
      on sa.area_id = d.area_id where sa.salesman_id=${id}`)
  }

  async getPharmacists(id: number): Promise<void> {
    return await this.dataSource.query(`select d.* from pharmacist p INNER JOIN salesman_area sa 
      on sa.area_id = p.area_id where sa.salesman_id=${id}`)
  }

}

