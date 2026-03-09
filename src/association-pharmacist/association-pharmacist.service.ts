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
    private readonly associationRepo: Repository<AssociationPharmacist>,
  ) { }

  create(associationPharmacistDto: CreateAssociationPharmacistDto): Promise<AssociationPharmacist> {
    const association = this.associationRepo.create(associationPharmacistDto);
    return this.associationRepo.save(association);
  }

  findAll(): Promise<AssociationPharmacist[]> {
    return this.associationRepo.find({ relations: ['streets'] });
  }

  findOne(id: number): Promise<AssociationPharmacist | null> {
    return this.associationRepo.findOneBy({ id });
  }

  async update(id: number, updateAssociationPharmacistDto: UpdateAssociationPharmacistDto): Promise<AssociationPharmacist | null> {
    await this.associationRepo.update(id, updateAssociationPharmacistDto);
    return this.associationRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.associationRepo.delete(id);
  }
}
