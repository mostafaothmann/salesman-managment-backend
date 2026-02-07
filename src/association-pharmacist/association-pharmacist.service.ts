import { Injectable } from '@nestjs/common';
import { CreateAssociationPharmacistDto } from './dto/create-association-pharmacist.dto';
import { UpdateAssociationPharmacistDto } from './dto/update-association-pharmacist.dto';

@Injectable()
export class AssociationPharmacistService {
  create(createAssociationPharmacistDto: CreateAssociationPharmacistDto) {
    return 'This action adds a new associationPharmacist';
  }

  findAll() {
    return `This action returns all associationPharmacist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associationPharmacist`;
  }

  update(id: number, updateAssociationPharmacistDto: UpdateAssociationPharmacistDto) {
    return `This action updates a #${id} associationPharmacist`;
  }

  remove(id: number) {
    return `This action removes a #${id} associationPharmacist`;
  }
}
