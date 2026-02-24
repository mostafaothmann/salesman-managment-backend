import { Injectable } from '@nestjs/common';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialization } from './entities/specialization.entity';
import { Type } from 'src/type/entities/type.entity';

@Injectable()
export class SpecializationService {
  constructor(
    @InjectRepository(Specialization) 
    private readonly specializationRepo: Repository<Specialization>,
    private readonly dataSource: DataSource,
  ) { }

  create(createSpecializationDto: CreateSpecializationDto): Promise<Specialization> {
    const specialization = this.specializationRepo.create(createSpecializationDto);
    return this.specializationRepo.save(specialization);
  }

  findAll(): Promise<Specialization[]> {
    return this.specializationRepo.find({relations:['doctors']});
  }

  findOne(id: number): Promise<Specialization | null> {
    return this.specializationRepo.findOneBy({ id });
  }

  async update(id: number, updateSpecializationTypeDto: UpdateSpecializationDto): Promise<Specialization | null> {
    await this.specializationRepo.update(id, updateSpecializationTypeDto);
    return this.specializationRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.specializationRepo.delete(id);
  }
  //Get Types for one Specializations
  async findTypesForOne(id: number): Promise<Type[]> {
    return this.dataSource.query(
      `select t.name,t.id,st.status from type t INNER JOIN specialization_type st 
       ON t.id = st.type_id
       where st.specialization_id = ${id}
       `
    )
  }

}
