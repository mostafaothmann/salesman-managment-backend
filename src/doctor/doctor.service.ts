import { Injectable, Query } from '@nestjs/common';
import { CreateDoctorDto, FilterDoctorProps } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(@InjectRepository(Doctor)
  private readonly docotorRepo: Repository<Doctor>,
    private readonly dataSource: DataSource) { }

  create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const docotr = this.docotorRepo.create(createDoctorDto);
    return this.docotorRepo.save(docotr)
  }

  findAll(): Promise<Doctor[]> {
    return this.dataSource.query(`select d.id,d.first_name, d.last_name, d.specialization_id ,
       d.classification, d.loyalty, d.last_visit_date,d.phone_number,d.telephone_number, d.city_id, d.area_id ,d.street_id from doctor d;
       `)
  }

  async filter(filters: FilterDoctorProps): Promise<Record<string, any>[]> {

    const query = this.docotorRepo.createQueryBuilder('doctor').
      select('doctor.id', 'id').
      addSelect('doctor.first_name', 'first_name').
      addSelect('doctor.last_name', 'last_name').
      addSelect('TIMESTAMPDIFF(YEAR,doctor.birth_date,CURDATE())', 'age').
      addSelect('doctor.specialization_id', 'specialization_id').
      addSelect('doctor.classification', 'classification').
      addSelect('doctor.loyalty', 'loyalty').
      addSelect('doctor.last_visit_date', 'last_visit_date').
      addSelect('doctor.city_id', 'city_id').
      addSelect('doctor.area_id', 'area_id').
      addSelect('doctor.street_id', 'street_id').
      addSelect('doctor.phone_number', 'phone_number').
      addSelect('doctor.telephone_number', 'telephone_number')

    if (filters.filter_first_name || filters.filter_last_name) {
      query.andWhere(
        `CONCAT(doctor.first_name,' ',doctor.last_name) LIKE :fullName`,
        { fullName: `%${filters.filter_first_name||''} ${filters.filter_last_name||''}%` },
      );
    }

    if (!isNaN(filters.filter_specialization_id) && filters.filter_specialization_id != 0) {
      query.andWhere(
        `doctor.specialization_id = :specializationId`,
        { specializationId: filters.filter_specialization_id },
      );
    }

    if (!isNaN(filters.filter_city_id) && filters.filter_city_id != 0) {
      query.andWhere(
        `doctor.city_id = :cityId`,
        { cityId: filters.filter_city_id },
      );
    }

    if (!isNaN(filters.filter_area_id) && filters.filter_area_id != 0) {
      query.andWhere(
        `doctor.area_id = :areaId`,
        { areaId: filters.filter_area_id },
      );
    }

    if (!isNaN(filters.filter_street_id) && filters.filter_street_id != 0) {
      query.andWhere(
        `doctor.street_id = :streetId`,
        { streetId: filters.filter_street_id },
      );
    }

    if (!isNaN(filters.filter_min_age) && filters.filter_min_age > 0) {
      query.andWhere(
        `TIMESTAMPDIFF(YEAR, doctor.birth_date, CURDATE()) >= :minAge`,
        { minAge: filters.filter_min_age },
      );
    }

    if (!isNaN(filters.filter_max_age) && filters.filter_max_age < 101) {
      query.andWhere(
        `TIMESTAMPDIFF(YEAR, doctor.birth_date, CURDATE()) <= :maxAge`,
        { maxAge: filters.filter_max_age },
      );
    }

    if (!isNaN(filters.filter_min_classification) && filters.filter_min_classification > -1) {
      query.andWhere(
        `doctor.classification >= :minClassification`,
        { minClassification: filters.filter_min_classification },
      );
    }

    if (!isNaN(filters.filter_max_classification) && filters.filter_max_classification < 6) {
      query.andWhere(
        `doctor.classification <= :maxClassification`,
        { maxClassification: filters.filter_max_classification },
      );
    }

    if (!isNaN(filters.filter_min_loyalty) && filters.filter_min_loyalty > -1) {
      query.andWhere(
        `doctor.loyalty >= :minLoyalty`,
        { minLoyalty: filters.filter_min_loyalty },
      );
    }

    if (!isNaN(filters.filter_max_loyalty) && filters.filter_max_loyalty < 6) {
      query.andWhere(
        `doctor.loyalty <= :maxLoyalty`,
        { maxLoyalty: filters.filter_max_loyalty },
      );
    }
    console.log("filers", filters)
    console.log(query.getSql())
    console.log(query.getParameters())
    console.log("results", await query.getRawMany())
    return await query.getRawMany()

  }

  findOne(id: number): Promise<Doctor | null> {
    return this.docotorRepo.findOneBy({ id })
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<Doctor | null> {
    await this.docotorRepo.update(id, updateDoctorDto)
    return this.docotorRepo.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.docotorRepo.delete(id)
  }
}
