import { Injectable } from '@nestjs/common';
import { CreateSpecializationTypeDto } from './dto/create-specialization-type.dto';
import { UpdateSpecializationTypeDto } from './dto/update-specialization-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecializationType } from './entities/specialization-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpecializationTypeService {
 constructor(
    @InjectRepository(SpecializationType)
    private readonly specializationTypeRepo: Repository<SpecializationType>,
  ) { }

  create(createSpecializationTypeDto: CreateSpecializationTypeDto): Promise<SpecializationType> {
    const specializationType = this.specializationTypeRepo.create(createSpecializationTypeDto);
    return this.specializationTypeRepo.save(specializationType);
  }

  findAll(): Promise<SpecializationType[]> {
    return this.specializationTypeRepo.find();
  }

  findOne(id: number): Promise<SpecializationType | null> {
    return this.specializationTypeRepo.findOneBy({ id });
  }

  async update(id: number, updateSpecializationTypeDto: UpdateSpecializationTypeDto): Promise<SpecializationType | null> {
    await this.specializationTypeRepo.update(id, updateSpecializationTypeDto);
    return this.specializationTypeRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.specializationTypeRepo.delete(id);
  }
  
}
