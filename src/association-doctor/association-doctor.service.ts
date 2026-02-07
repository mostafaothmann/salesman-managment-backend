import { Injectable } from '@nestjs/common';
import { CreateAssociationDoctorDto } from './dto/create-association-doctor.dto';
import { UpdateAssociationDoctorDto } from './dto/update-association-doctor.dto';

@Injectable()
export class AssociationDoctorService {
  create(createAssociationDoctorDto: CreateAssociationDoctorDto) {
    return 'This action adds a new associationDoctor';
  }

  findAll() {
    return `This action returns all associationDoctor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associationDoctor`;
  }

  update(id: number, updateAssociationDoctorDto: UpdateAssociationDoctorDto) {
    return `This action updates a #${id} associationDoctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} associationDoctor`;
  }
}
