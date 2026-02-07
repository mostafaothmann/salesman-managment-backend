import { Injectable } from '@nestjs/common';
import { CreateOnlineOfferDto } from './dto/create-online-offer.dto';
import { UpdateOnlineOfferDto } from './dto/update-online-offer.dto';

@Injectable()
export class OnlineOfferService {
  create(createOnlineOfferDto: CreateOnlineOfferDto) {
    return 'This action adds a new onlineOffer';
  }

  findAll() {
    return `This action returns all onlineOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onlineOffer`;
  }

  update(id: number, updateOnlineOfferDto: UpdateOnlineOfferDto) {
    return `This action updates a #${id} onlineOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} onlineOffer`;
  }
}
