import { Injectable } from '@nestjs/common';
import { CreateSamplePharmacistDto } from './dto/create-sample-pharmacist.dto';
import { UpdateSamplePharmacistDto } from './dto/update-sample-pharmacist.dto';

@Injectable()
export class SamplePharmacistService {
  create(createSamplePharmacistDto: CreateSamplePharmacistDto) {
    return 'This action adds a new samplePharmacist';
  }

  findAll() {
    return `This action returns all samplePharmacist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} samplePharmacist`;
  }

  update(id: number, updateSamplePharmacistDto: UpdateSamplePharmacistDto) {
    return `This action updates a #${id} samplePharmacist`;
  }

  remove(id: number) {
    return `This action removes a #${id} samplePharmacist`;
  }
}
