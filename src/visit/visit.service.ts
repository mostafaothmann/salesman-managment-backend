import { PharmacistVisitService } from './../pharmacist-visit/pharmacist-visit.service';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Visit } from "./entities/visit.entity";
import { DataSource } from "typeorm";
import { CreateVisitDto, FilterVisitProps } from "./dto/create-visit.dto";
import { isString } from "class-validator";
import { UpdateVisitDto } from "./dto/update-visit.dto";
import { DoctorVisit } from "src/doctor-visit/entities/doctor-visit.entity";
import { PharmacistVisit } from "src/pharmacist-visit/entities/pharmacist-visit.entity";
import { DoctorVisitService } from 'src/doctor-visit/doctor-visit.service';
import { FilterDoctorVisitProps } from 'src/doctor-visit/dto/create-doctor-visit.dto';
import { FilterPharmacistVisitProps } from 'src/pharmacist-visit/dto/create-pharmacist-visit.dto';

@Injectable()
export class VisitService {
  constructor(
    @InjectRepository(Visit)
    private readonly visitRepo: Repository<Visit>,
    @InjectRepository(DoctorVisit)
    private readonly visitDoctorRepo: Repository<DoctorVisit>,
    @InjectRepository(PharmacistVisit)
    private readonly visitPharmacistRepo: Repository<PharmacistVisit>,
    private readonly dataSource: DataSource
  ) { }

  create(createVisitDto: CreateVisitDto): Promise<Visit> {
    const visit = this.visitRepo.create(createVisitDto);
    return this.visitRepo.save(visit);
  }

  async findAllDoctors(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`select v.lan,v.lat, v.id,v.visit_status_id,v.salesman_id,v.assistant_id,
      v.id,v.type_id,v.created_at,v.validated_at, s.quantity as quantity,
      s.type_id as sample_type,d.lan as docLan,d.lat as docLat,v.doctor_id
      from visit as v LEFT JOIN sample as s on v.id=s.visit_id 
       INNER JOIN doctor as d on v.doctor_id=d.id where v.typeC='doctor'
      GROUP BY v.id 
      LIMIT ${limit} OFFSET ${offset};
       `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM visit where visit.typeC='doctor';
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
    const data = await this.dataSource.query(`select v.lan,v.lat, v.id,v.visit_status_id,v.salesman_id,v.assistant_id,
      v.id,v.type_id,v.created_at,v.validated_at, s.quantity as quantity,
      s.type_id as sample_type,p.lan as phaLan,p.lat as phaLat,v.pharmacist_id
      from visit as v LEFT JOIN sample as s on v.id=s.visit_id
       INNER JOIN pharmacist as p on v.pharmacist_id=p.id where v.typeC='pharmacist'
      GROUP BY v.id 
      LIMIT ${limit} OFFSET ${offset};
       `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM visit where visit.typeC='pharmacist';
  `);
    const total = parseInt(totalResult[0].total, 10);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }




  async filterDoctors(
    filters: FilterDoctorVisitProps,
  ): Promise<Record<string, any>> {
    const query = this.visitRepo
      .createQueryBuilder('dv').where('dv.typeC = :typeC', { typeC: 'doctor' })
      .innerJoin('doctor', 'd', 'dv.doctor_id = d.id')
      .select('dv.id', 'id')
      .addSelect('dv.lan', 'lan')
      .addSelect('dv.lat', 'lat')
      .addSelect('d.lat', 'doctorLat')
      .addSelect('d.lan', 'doctorLan')
      .addSelect('dv.type_id', 'type_id')
      .addSelect('dv.note', 'note')
      .addSelect('dv.is_other_spoken_note', 'is_other_spoken_note')
      .addSelect('dv.number_of_patients', 'number_of_patients')
      .addSelect('dv.closest_pharmacy', 'closest_pharmacy')
      .addSelect('dv.assistant_id', 'assistant_id')
      .addSelect('dv.doctor_id', 'doctor_id')
      .addSelect('dv.salesman_id', 'salesman_id')
      .addSelect('dv.visit_status_id', 'visit_status_id')
      .addSelect('d.specialization_id', 'specialization_id')
      .addSelect('d.classification', 'classification')
      .addSelect('d.city_id', 'city_id')
      .addSelect('d.area_id', 'area_id')
      .addSelect('d.street_id', 'street_id')
      .addSelect('dv.created_at', 'created_at')

    if (!isNaN(filters.filter_specialization_id) && filters.filter_specialization_id != -1) {
      query.andWhere(
        `d.specialization_id = :specializationId`,
        { specializationId: filters.filter_specialization_id },
      );
    }

    if (!isNaN(filters.filter_type_id) && filters.filter_type_id != -1) {
      query.andWhere(
        `dv.type_id = :typeId`,
        { typeId: filters.filter_type_id },
      );
    }

    if (!isNaN(filters.filter_salesman_id) && filters.filter_salesman_id != -1) {
      query.andWhere(
        `dv.salesman_id = :salesmanId`,
        { salesmanId: filters.filter_salesman_id },
      );
    }

    if (!isNaN(filters.filter_assistant_id) && filters.filter_assistant_id != -1) {
      query.andWhere(
        `dv.assistant_id) = :assistantId`,
        { assistantId: filters.filter_assistant_id },
      );
    }


    if (!isNaN(filters.filter_visit_status_id) && filters.filter_visit_status_id != -1) {
      query.andWhere(
        `dv.visit_status_id = :visitStatusId`,
        { visitStatusId: filters.filter_visit_status_id },
      );
    }


    if (!isNaN(filters.filter_doctor_id) && filters.filter_doctor_id != -1) {
      query.andWhere(
        `dv.doctor_id) = :doctorId`,
        { doctorId: filters.filter_doctor_id },
      );
    }

    if (!isNaN(filters.filter_governorate_id) && filters.filter_governorate_id != -1) {
      query.andWhere(
        `d.governorate_id = :governorateId`,
        { governorateId: filters.filter_city_id },
      );
    }

    if (!isNaN(filters.filter_city_id) && filters.filter_city_id != -1) {
      query.andWhere(
        `d.city_id = :cityId`,
        { cityId: filters.filter_city_id },
      );
    }

    if (!isNaN(filters.filter_area_id) && filters.filter_area_id != -1) {
      query.andWhere(
        `d.area_id = :areaId`,
        { areaId: filters.filter_area_id },
      );
    }

    if (!isNaN(filters.filter_street_id) && filters.filter_street_id != -1) {
      query.andWhere(
        `d.street_id = :streetId`,
        { streetId: filters.filter_street_id },
      );
    }

    if (isString(filters.filter_min_date) && filters.filter_min_date) {
      query.andWhere(
        `dv.created_at >= :minDate`,
        { minDate: filters.filter_min_date },
      );
    }

    if (isString(filters.filter_max_date) && filters.filter_max_date) {
      query.andWhere(
        `dv.created_at >= :maxDate`,
        { maxDate: filters.filter_max_date },
      );
    }

    if (!isNaN(filters.filter_min_classification) && filters.filter_min_classification > -1) {
      query.andWhere(
        `d.classification >= :minClassification`,
        { minClassification: filters.filter_min_classification },
      );
    }

    if (!isNaN(filters.filter_max_classification) && filters.filter_max_classification < 6) {
      query.andWhere(
        `d.classification <= :maxClassification`,
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








  async filterPharmacists(
    filters: FilterPharmacistVisitProps,
  ): Promise<Record<string, any>> {
    const query = this.visitRepo
      .createQueryBuilder('pv').where('pv.typeC = :typeC', { typeC: 'pharmacist' })
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

  async findOne(id: number): Promise<any | null> {
    return await this.dataSource.query(`Select * from visit as v where v.id=${id}`)
  }

  async update(id: number, updateVisitDto: UpdateVisitDto): Promise<Visit | null> {
    await this.visitRepo.update(id, updateVisitDto);
    return this.visitRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.visitRepo.delete(id);
  }

}
