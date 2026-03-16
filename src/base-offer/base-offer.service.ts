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
    private readonly baseOfferRepo: Repository<BaseOffer>,
  ) { }

  create(baseOfferDto: CreateBaseOfferDto): Promise<BaseOffer> {
    const baseOffer = this.baseOfferRepo.create(baseOfferDto);
    return this.baseOfferRepo.save(baseOffer);
  }

  findAll(): Promise<BaseOffer[]> {
    return this.baseOfferRepo.find();
  }

  findOne(id: number): Promise<BaseOffer | null> {
    return this.baseOfferRepo.findOneBy({ id });
  }

  async update(id: number, updateBaseOfferDto: UpdateBaseOfferDto): Promise<BaseOffer | null> {
    await this.baseOfferRepo.update(id, updateBaseOfferDto);
    return this.baseOfferRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.baseOfferRepo.delete(id);
  }
}
