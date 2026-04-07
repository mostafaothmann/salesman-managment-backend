import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospital } from './entities/hospital.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Hospital)
    private readonly hospitalRepo: Repository<Hospital>,
    private readonly dataSource: DataSource
  ) { }

  create(createTypeDto: CreateHospitalDto): Promise<Hospital> {
    const type = this.hospitalRepo.create(createTypeDto);
    return this.hospitalRepo.save(type);
  }

  findAll(): Promise<Hospital[]> {
    return this.hospitalRepo.find();
  }

  findOne(id: number): Promise<Hospital | null> {
    return this.hospitalRepo.findOneBy(
      { id }
    );
  }

  async update(id: number, updateGroupTypeDto: UpdateHospitalDto): Promise<Hospital | null> {
    await this.hospitalRepo.update(id, updateGroupTypeDto);
    return this.hospitalRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.hospitalRepo.delete(id);
  }

  async getNames(): Promise<{ name: string }[] | []> {
    return this.dataSource.query(`select h.name,h.id from hospital as h`)
  }

}
