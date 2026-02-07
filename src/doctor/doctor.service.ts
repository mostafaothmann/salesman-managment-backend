import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(@InjectRepository(Doctor)
  private readonly docotrRepo: Repository<Doctor>) { }

  create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const docotr = this.docotrRepo.create(createDoctorDto);
    return this.docotrRepo.save(docotr)
  }

  findAll(): Promise<Doctor[]> {
    return this.docotrRepo.find();
  }

  findOne(id: number): Promise<Doctor | null> {
    return this.docotrRepo.findOneBy({ id })
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<Doctor | null> {
    await this.docotrRepo.update(id, updateDoctorDto)
    return this.docotrRepo.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.docotrRepo.delete(id)
  }
}
