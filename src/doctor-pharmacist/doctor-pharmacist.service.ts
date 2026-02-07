import { Injectable } from '@nestjs/common';
import { CreateDoctorPharmacistDto } from './dto/create-doctor-pharmacist.dto';
import { UpdateDoctorPharmacistDto } from './dto/update-doctor-pharmacist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorPharmacist } from './entities/doctor-pharmacist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorPharmacistService {
  constructor(
    @InjectRepository(DoctorPharmacist)
    private readonly doctorPharmacistRepo: Repository<DoctorPharmacist>,
  ) { }

  create(docotrPharmacistDto: CreateDoctorPharmacistDto): Promise<DoctorPharmacist> {
    const area = this.doctorPharmacistRepo.create(docotrPharmacistDto);
    return this.doctorPharmacistRepo.save(area);
  }

  findAll(): Promise<DoctorPharmacist[]> {
    return this.doctorPharmacistRepo.find();
  }

  findOne(id: number): Promise<DoctorPharmacist | null> {
    return this.doctorPharmacistRepo.findOneBy({ id });
  }

  async update(id: number, updateDoctorPharmacistDto: UpdateDoctorPharmacistDto): Promise<DoctorPharmacist | null> {
    await this.doctorPharmacistRepo.update(id, updateDoctorPharmacistDto);
    return this.doctorPharmacistRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.doctorPharmacistRepo.delete(id);
  }
}
