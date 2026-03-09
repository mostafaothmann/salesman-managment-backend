import { Injectable } from '@nestjs/common';
import { CreateAssociationDto } from './dto/create-assosiation.dto';
import { UpdateAssociationDto } from './dto/update-assosiation.dto';
import { Association } from './entities/association.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AssosiationService {
  constructor(
    @InjectRepository(Association)
    private readonly associationRepo: Repository<Association>,
  ) { }

  create(associationDto: CreateAssociationDto): Promise<Association> {
    const association = this.associationRepo.create(associationDto);
    return this.associationRepo.save(association);
  }

  findAll(): Promise<Association[]> {
    return this.associationRepo.find({ relations: ['streets'] });
  }

  findOne(id: number): Promise<Association | null> {
    return this.associationRepo.findOneBy({ id });
  }

  async update(id: number, updateAssociationDto: UpdateAssociationDto): Promise<Association | null> {
    await this.associationRepo.update(id, updateAssociationDto);
    return this.associationRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.associationRepo.delete(id);
  }

}
