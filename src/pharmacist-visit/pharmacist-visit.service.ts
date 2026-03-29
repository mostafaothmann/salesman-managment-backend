import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PharmacistVisit } from "./entities/pharmacist-visit.entity";
import { DataSource } from "typeorm";
import { CreatePharmacistVisitDto, FilterPharmacistVisitProps } from "./dto/create-pharmacist-visit.dto";
import { isString } from "class-validator";
import { UpdatePharmacistVisitDto } from "./dto/update-pharmacist-visit.dto";

@Injectable()
export class PharmacistVisitService {
  constructor(
    @InjectRepository(PharmacistVisit)
    private readonly visitRepo: Repository<PharmacistVisit>,
    private readonly dataSource: DataSource
  ) { }

  create(createVisitDto: CreatePharmacistVisitDto): Promise<PharmacistVisit> {
    const visit = this.visitRepo.create(createVisitDto);
    return this.visitRepo.save(visit);
  }

  async show() {
    return this.dataSource.query(`Select * from pharmacist_visit pv`)
  }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`select pv.lan,pv.lat, pv.id,pv.visit_status_id,pv.salesman_id,pv.assistant_id,
      pv.pharmacist_id,pv.type_id,pv.created_at,pv.validated_at,p.lat as pharmacistLat,p.lan as pharmacistLan, s.quantity as quantity,
      s.type_id as sample_type
      from pharmacist_visit as pv INNER JOIN pharmacist as p on pv.pharmacist_id = p.id LEFT JOIN sample as s on pv.id=s.visit_id
      GROUP BY pv.id
      LIMIT ${limit} OFFSET ${offset};
       `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM pharmacist_visit;
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
    filters: FilterPharmacistVisitProps,
  ): Promise<Record<string, any>> {
    const query = this.visitRepo
      .createQueryBuilder('pv')
      .innerJoin('pharmacist', 'p', 'pv.pharmacist_id = p.id')
      .select('pv.id', 'id')
      .addSelect('pv.lan', 'lan')
      .addSelect('pv.lat', 'lat')
      .addSelect('p.lat', 'pharmacistLat')
      .addSelect('p.lan', 'pharmacistLan')
      .addSelect('pv.type_id', 'type_id')
      .addSelect('pv.note', 'note')
      .addSelect('pv.is_other_soken_note', 'is_other_soken_note')
      .addSelect('pv.number_of_patients', 'number_of_patients')
      .addSelect('pv.closest_pharmacy', 'closest_pharmacy')
      .addSelect('pv.assistant_id', 'assistant_id')
      .addSelect('pv.pharmacist_id', 'pharmacist_id')
      .addSelect('pv.salesman_id', 'salesman_id')
      .addSelect('pv.visit_status_id', 'visit_status_id')
      .addSelect('p.secialization_id', 'secialization_id')
      .addSelect('p.classification', 'classification')
      .addSelect('p.city_id', 'city_id')
      .addSelect('p.area_id', 'area_id')
      .addSelect('p.street_id', 'street_id')
      .addSelect('pv.created_at', 'created_at')

    if (!isNaN(filters.filter_specialization_id) && filters.filter_specialization_id != -1) {
      query.andWhere(
        `p.secialization_id = :secializationId`,
        { secializationId: filters.filter_specialization_id },
      );
    }

    if (!isNaN(filters.filter_type_id) && filters.filter_type_id != -1) {
      query.andWhere(
        `pv.type_id = :typeId`,
        { typeId: filters.filter_type_id },
      );
    }

    if (!isNaN(filters.filter_salesman_id) && filters.filter_salesman_id != -1) {
      query.andWhere(
        `pv.salesman_id = :salesmanId`,
        { salesmanId: filters.filter_salesman_id },
      );
    }

    if (!isNaN(filters.filter_assistant_id) && filters.filter_assistant_id != -1) {
      query.andWhere(
        `pv.assistant_id) = :assistantId`,
        { assistantId: filters.filter_assistant_id },
      );
    }


    if (!isNaN(filters.filter_visit_status_id) && filters.filter_visit_status_id != -1) {
      query.andWhere(
        `pv.visit_status_id = :visitStatusId`,
        { visitStatusId: filters.filter_visit_status_id },
      );
    }


    if (!isNaN(filters.filter_pharmacist_id) && filters.filter_pharmacist_id != -1) {
      query.andWhere(
        `pv.pharmacist_id) = :pharmacistId`,
        { pharmacistId: filters.filter_pharmacist_id },
      );
    }

    if (!isNaN(filters.filter_governorate_id) && filters.filter_governorate_id != -1) {
      query.andWhere(
        `p.governorate_id = :governorateId`,
        { governorateId: filters.filter_city_id },
      );
    }

    if (!isNaN(filters.filter_city_id) && filters.filter_city_id != -1) {
      query.andWhere(
        `p.city_id = :cityId`,
        { cityId: filters.filter_city_id },
      );
    }

    if (!isNaN(filters.filter_area_id) && filters.filter_area_id != -1) {
      query.andWhere(
        `p.area_id = :areaId`,
        { areaId: filters.filter_area_id },
      );
    }

    if (!isNaN(filters.filter_street_id) && filters.filter_street_id != -1) {
      query.andWhere(
        `p.street_id = :streetId`,
        { streetId: filters.filter_street_id },
      );
    }

    if (isString(filters.filter_min_date) && filters.filter_min_date) {
      query.andWhere(
        `pv.created_at >= :minDate`,
        { minDate: filters.filter_min_date },
      );
    }

    if (isString(filters.filter_max_date) && filters.filter_max_date) {
      query.andWhere(
        `pv.created_at >= :maxDate`,
        { maxDate: filters.filter_max_date },
      );
    }

    if (!isNaN(filters.filter_min_classification) && filters.filter_min_classification > -1) {
      query.andWhere(
        `p.classification >= :minClassification`,
        { minClassification: filters.filter_min_classification },
      );
    }

    if (!isNaN(filters.filter_max_classification) && filters.filter_max_classification < 6) {
      query.andWhere(
        `p.classification <= :maxClassification`,
        { maxClassification: filters.filter_max_classification },
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




  async findOne(id: number): Promise<PharmacistVisit | null> {
    return this.visitRepo.findOneBy({ id });
  }

  async update(id: number, updateVisitDto: UpdatePharmacistVisitDto): Promise<PharmacistVisit | null> {
    await this.visitRepo.update(id, updateVisitDto);
    return this.visitRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.visitRepo.delete(id);
  }

}
