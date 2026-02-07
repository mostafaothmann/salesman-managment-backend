import { Injectable } from '@nestjs/common';
import { CreatePharmacistDto } from './dto/create-pharmacist.dto';
import { UpdatePharmacistDto } from './dto/update-pharmacist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pharmacist } from './entities/pharmacist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PharmacistService {
  constructor(
    @InjectRepository(Pharmacist)
    private readonly pharmacistRepo: Repository<Pharmacist>,
  ) { }

  create(createPharmacistDto: CreatePharmacistDto): Promise<Pharmacist> {
    const pharmacist = this.pharmacistRepo.create(createPharmacistDto);
    return this.pharmacistRepo.save(pharmacist);
  }

  findAll(): Promise<Pharmacist[]> {
    return this.pharmacistRepo.find();
  }

  findOne(id: number): Promise<Pharmacist | null> {
    return this.pharmacistRepo.findOneBy({ id });
  }

  async update(id: number, updatePharmacistDto: UpdatePharmacistDto): Promise<Pharmacist | null> {
    await this.pharmacistRepo.update(id, updatePharmacistDto);
    return this.pharmacistRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.pharmacistRepo.delete(id);
  }

}


