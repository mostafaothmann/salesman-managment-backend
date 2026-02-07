import { Injectable } from '@nestjs/common';
import { CreateDoctorVisitDto } from './dto/create-doctor-visit.dto';
import { UpdateDoctorVisitDto } from './dto/update-doctor-visit.dto';
import { Repository } from 'typeorm';
import { DoctorVisit } from './entities/doctor-visit.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DoctorVisitService {
  constructor(
    @InjectRepository(DoctorVisit)
    private readonly visitRepo: Repository<DoctorVisit>,
  ) { }

  create(createVisitDto: CreateDoctorVisitDto): Promise<DoctorVisit> {
    const visit = this.visitRepo.create(createVisitDto);
    return this.visitRepo.save(visit);
  }

  findAll(): Promise<DoctorVisit[]> {
    return this.visitRepo.find();
  }

  findOne(id: number): Promise<DoctorVisit | null> {
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
