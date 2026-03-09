import { Injectable } from '@nestjs/common';
import { CreatePharmacistVisitDto } from './dto/create-pharmacist-visit.dto';
import { UpdatePharmacistVisitDto } from './dto/update-pharmacist-visit.dto';
import { DataSource, Repository } from 'typeorm';
import { PharmacistVisit } from './entities/pharmacist-visit.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PharmacistVisitService {
  constructor(@InjectRepository(PharmacistVisit)
  private readonly pharmacistVisitRepo: Repository<PharmacistVisit>,
    private readonly dataSource: DataSource) { }
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
