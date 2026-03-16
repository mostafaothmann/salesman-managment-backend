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
    private readonly associationDoctorRepo: Repository<AssociationDoctor>,
  ) { }

  create(associationDoctorDto: CreateAssociationDoctorDto): Promise<AssociationDoctor> {
    const association = this.associationDoctorRepo.create(associationDoctorDto);
    return this.associationDoctorRepo.save(association);
  }

  findAll(): Promise<AssociationDoctor[]> {
    return this.associationDoctorRepo.find();
  }

  findOne(id: number): Promise<AssociationDoctor | null> {
    return this.associationDoctorRepo.findOneBy({ id });
  }

  async update(id: number, updateAssociationDoctorDto: UpdateAssociationDoctorDto): Promise<AssociationDoctor | null> {
    await this.associationDoctorRepo.update(id, updateAssociationDoctorDto);
    return this.associationDoctorRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.associationDoctorRepo.delete(id);
  }

}
