import { Injectable } from '@nestjs/common';
import { CreateBaseOfferDto } from './dto/create-base-offer.dto';
import { UpdateBaseOfferDto } from './dto/update-base-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseOffer } from './entities/base-offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BaseOfferService {
  constructor(
    @InjectRepository(BaseOffer)
    private readonly associationRepo: Repository<BaseOffer>,
  ) { }

  create(associationPharmacistDto: CreateBaseOfferDto): Promise<BaseOffer> {
    const association = this.associationRepo.create(associationPharmacistDto);
    return this.associationRepo.save(association);
  }

  findAll(): Promise<BaseOffer[]> {
    return this.associationRepo.find({ relations: ['streets'] });
  }

  findOne(id: number): Promise<BaseOffer | null> {
    return this.associationRepo.findOneBy({ id });
  }

  async update(id: number, updateAssociationPharmacistDto: UpdateBaseOfferDto): Promise<BaseOffer | null> {
    await this.associationRepo.update(id, updateAssociationPharmacistDto);
    return this.associationRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.associationRepo.delete(id);
  }
}
