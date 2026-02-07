import { Injectable } from '@nestjs/common';
import { CreateBaseOfferDto } from './dto/create-base-offer.dto';
import { UpdateBaseOfferDto } from './dto/update-base-offer.dto';

@Injectable()
export class BaseOfferService {
  create(createBaseOfferDto: CreateBaseOfferDto) {
    return 'This action adds a new baseOffer';
  }

  findAll() {
    return `This action returns all baseOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} baseOffer`;
  }

  update(id: number, updateBaseOfferDto: UpdateBaseOfferDto) {
    return `This action updates a #${id} baseOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} baseOffer`;
  }
}
