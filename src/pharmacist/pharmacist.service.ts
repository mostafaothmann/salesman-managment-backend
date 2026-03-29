import { Injectable, Query } from '@nestjs/common';
import { CreatePharmacistDto, FilterPharmacistProps } from './dto/create-pharmacist.dto';
import { UpdatePharmacistDto } from './dto/update-pharmacist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pharmacist } from './entities/pharmacist.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PharmacistService {
  constructor(@InjectRepository(Pharmacist)
  private readonly docotorRepo: Repository<Pharmacist>,
    private readonly dataSource: DataSource) { }

  create(createPharmacistDto: CreatePharmacistDto): Promise<Pharmacist> {
    const docotr = this.docotorRepo.create(createPharmacistDto);
    return this.docotorRepo.save(docotr)
  }

  async show() {
    return this.dataSource.query(`Select * from pharmacist p`)
  }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;

    const data = await this.dataSource.query(`
    SELECT p.id, p.first_name, p.last_name,
           p.classification, p.loyalty, p.last_visit_date,
           p.lat, p.lan, p.phone_number, p.telephone_number,
           p.city_id, p.area_id, p.street_id
    FROM pharmacist p
    LIMIT ${limit} OFFSET ${offset};
  `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM pharmacist;
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
    filters: FilterPharmacistProps,
  ): Promise<Record<string, any>> {

    const query = this.docotorRepo.createQueryBuilder('pharmacist')
      .select('pharmacist.id', 'id')
      .addSelect('pharmacist.lan', 'lan')
      .addSelect('pharmacist.lat', 'lat')
      .addSelect('pharmacist.first_name', 'first_name')
      .addSelect('pharmacist.last_name', 'last_name')
      .addSelect('TIMESTAMPDIFF(YEAR,pharmacist.birth_date,CURDATE())', 'age')
      .addSelect('pharmacist.classification', 'classification')
      .addSelect('pharmacist.loyalty', 'loyalty')
      .addSelect('pharmacist.last_visit_date', 'last_visit_date')
      .addSelect('pharmacist.city_id', 'city_id')
      .addSelect('pharmacist.area_id', 'area_id')
      .addSelect('pharmacist.street_id', 'street_id')
      .addSelect('pharmacist.phone_number', 'phone_number')
      .addSelect('pharmacist.telephone_number', 'telephone_number');


    console.log(filters)
    if (filters.filter_first_name || filters.filter_last_name) {
      query.andWhere(
        `CONCAT(pharmacist.first_name,' ',pharmacist.last_name) LIKE :fullName`,
        { fullName: `%${filters.filter_first_name || ''} ${filters.filter_last_name || ''}%` },
      );
    }

    if (!isNaN(filters.filter_city_id) && filters.filter_city_id != 0) {
      query.andWhere(
        `pharmacist.city_id = :cityId`,
        { cityId: filters.filter_city_id },
      );
    }

    if (!isNaN(filters.filter_area_id) && filters.filter_area_id != 0) {
      query.andWhere(
        `pharmacist.area_id = :areaId`,
        { areaId: filters.filter_area_id },
      );
    }

    if (!isNaN(filters.filter_street_id) && filters.filter_street_id != 0) {
      query.andWhere(
        `pharmacist.street_id = :streetId`,
        { streetId: filters.filter_street_id },
      );
    }

    if (!isNaN(filters.filter_min_age) && filters.filter_min_age > 0) {
      query.andWhere(
        `TIMESTAMPDIFF(YEAR, pharmacist.birth_date, CURDATE()) >= :minAge`,
        { minAge: filters.filter_min_age },
      );
    }

    if (!isNaN(filters.filter_max_age) && filters.filter_max_age < 101) {
      query.andWhere(
        `TIMESTAMPDIFF(YEAR, pharmacist.birth_date, CURDATE()) <= :maxAge`,
        { maxAge: filters.filter_max_age },
      );
    }

    if (!isNaN(filters.filter_min_classification) && filters.filter_min_classification > -1) {
      query.andWhere(
        `pharmacist.classification >= :minClassification`,
        { minClassification: filters.filter_min_classification },
      );
    }

    if (!isNaN(filters.filter_max_classification) && filters.filter_max_classification < 6) {
      query.andWhere(
        `pharmacist.classification <= :maxClassification`,
        { maxClassification: filters.filter_max_classification },
      );
    }

    if (!isNaN(filters.filter_min_loyalty) && filters.filter_min_loyalty > -1) {
      query.andWhere(
        `pharmacist.loyalty >= :minLoyalty`,
        { minLoyalty: filters.filter_min_loyalty },
      );
    }

    if (!isNaN(filters.filter_max_loyalty) && filters.filter_max_loyalty < 6) {
      query.andWhere(
        `pharmacist.loyalty <= :maxLoyalty`,
        { maxLoyalty: filters.filter_max_loyalty },
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

  findOne(id: number): Promise<Pharmacist | null> {
    return this.docotorRepo.findOneBy({ id })
  }

  async update(id: number, updatePharmacistDto: UpdatePharmacistDto): Promise<Pharmacist | null> {
    await this.docotorRepo.update(id, updatePharmacistDto)
    return this.docotorRepo.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.docotorRepo.delete(id)
  }

  async getNames(): Promise<{ first_name: string, last_name: string }[] | []> {
    return await this.dataSource.query(`select p.id,p.first_name,p.last_name from pharmacist as p `)
  }
}
