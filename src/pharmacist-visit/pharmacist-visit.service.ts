import { Injectable } from '@nestjs/common';
import { CreatePharmacistVisitDto } from './dto/create-pharmacist-visit.dto';
import { UpdatePharmacistVisitDto } from './dto/update-pharmacist-visit.dto';

@Injectable()
export class PharmacistVisitService {
  create(createPharmacistVisitDto: CreatePharmacistVisitDto) {
    return 'This action adds a new pharmacistVisit';
  }

  findAll() {
    return `This action returns all pharmacistVisit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pharmacistVisit`;
  }

  update(id: number, updatePharmacistVisitDto: UpdatePharmacistVisitDto) {
    return `This action updates a #${id} pharmacistVisit`;
  }

  remove(id: number) {
    return `This action removes a #${id} pharmacistVisit`;
  }
}
