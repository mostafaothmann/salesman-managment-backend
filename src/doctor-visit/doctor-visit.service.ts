import { Injectable } from '@nestjs/common';
import { CreateDoctorVisitDto, FilterDoctorVisitProps } from './dto/create-doctor-visit.dto';
import { UpdateDoctorVisitDto } from './dto/update-doctor-visit.dto';
import { DataSource, Repository } from 'typeorm';
import { DoctorVisit } from './entities/doctor-visit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { isString } from 'class-validator';

@Injectable()
export class DoctorVisitService {
  constructor(
    @InjectRepository(DoctorVisit)
    private readonly visitRepo: Repository<DoctorVisit>,
    private readonly dataSource: DataSource
  ) { }

  async show() {
    return this.dataSource.query(`Select * from visit v where v.typeC='doctor'`)
  }

  create(createVisitDto: CreateDoctorVisitDto): Promise<DoctorVisit> {
    const visit = this.visitRepo.create(createVisitDto);
    return this.visitRepo.save(visit);
  }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`select dv.lan,dv.lat, dv.id,dv.visit_status_id,dv.salesman_id,dv.assistant_id,
      dv.doctor_id,dv.type_id,dv.created_at,dv.validated_at,d.lat as doctorLat,d.lan as doctorLan, s.quantity as quantity,
      s.type_id as sample_type
      from doctor_visit as dv INNER JOIN doctor as d on dv.doctor_id = d.id LEFT JOIN sample as s on dv.id=s.visit_id
      GROUP BY dv.id
      LIMIT ${limit} OFFSET ${offset};
       `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM doctor_visit;
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
    filters: FilterDoctorVisitProps,
  ): Promise<Record<string, any>> {
    const query = this.visitRepo
      .createQueryBuilder('dv')
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




  async findOne(id: number): Promise<DoctorVisit | null> {
    return this.visitRepo.findOneBy({ id });
  }

  async update(id: number, updateVisitDto: UpdateDoctorVisitDto): Promise<DoctorVisit | null> {
    await this.visitRepo.update(id, updateVisitDto);
    return this.visitRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.visitRepo.delete(id);
  }

}
