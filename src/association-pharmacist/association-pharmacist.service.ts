import { Injectable } from '@nestjs/common';
import { CreateAssociationPharmacistDto } from './dto/create-association-pharmacist.dto';
import { UpdateAssociationPharmacistDto } from './dto/update-association-pharmacist.dto';
import { AssociationPharmacist } from './entities/association-pharmacist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AssociationPharmacistService {
  constructor(
    @InjectRepository(AssociationPharmacist)
    private readonly associationPharmacistRepo: Repository<AssociationPharmacist>,
  ) { }

  create(associationPharmacistDto: CreateAssociationPharmacistDto): Promise<AssociationPharmacist> {
    const association = this.associationPharmacistRepo.create(associationPharmacistDto);
    return this.associationPharmacistRepo.save(association);
  }

  findAll(): Promise<AssociationPharmacist[]> {
    return this.associationPharmacistRepo.find();
  }

  findOne(id: number): Promise<AssociationPharmacist | null> {
    return this.associationPharmacistRepo.findOneBy({ id });
  }

  async update(id: number, updateAssociationPharmacistDto: UpdateAssociationPharmacistDto): Promise<AssociationPharmacist | null> {
    await this.associationPharmacistRepo.update(id, updateAssociationPharmacistDto);
    return this.associationPharmacistRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.associationPharmacistRepo.delete(id);
  }
}
