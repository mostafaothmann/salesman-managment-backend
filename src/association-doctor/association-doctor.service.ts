import { Injectable } from '@nestjs/common';
import { CreateAssociationDoctorDto } from './dto/create-association-doctor.dto';
import { UpdateAssociationDoctorDto } from './dto/update-association-doctor.dto';
import { AssociationDoctor } from './entities/association-doctor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AssociationDoctorService {
  constructor(
    @InjectRepository(AssociationDoctor)
    private readonly associationRepo: Repository<AssociationDoctor>,
  ) { }

  create(associationDoctorDto: CreateAssociationDoctorDto): Promise<AssociationDoctor> {
    const association = this.associationRepo.create(associationDoctorDto);
    return this.associationRepo.save(association);
  }

  findAll(): Promise<AssociationDoctor[]> {
    return this.associationRepo.find({ relations: ['streets'] });
  }

  findOne(id: number): Promise<AssociationDoctor | null> {
    return this.associationRepo.findOneBy({ id });
  }

  async update(id: number, updateAssociationDoctorDto: UpdateAssociationDoctorDto): Promise<AssociationDoctor | null> {
    await this.associationRepo.update(id, updateAssociationDoctorDto);
    return this.associationRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.associationRepo.delete(id);
  }

}
