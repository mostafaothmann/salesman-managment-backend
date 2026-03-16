import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateOnlineOrderDto } from 'src/online-order/dto/update-online-order.dto';
import { OnlineOffer } from './entities/online-offer.entity';
import { CreateOnlineOfferDto } from './dto/create-online-offer.dto';
import { UpdateOnlineOfferDto } from './dto/update-online-offer.dto';

@Injectable()
export class OnlineOfferService {
  constructor(
    @InjectRepository(OnlineOffer)
    private readonly onlineOfferRepo: Repository<OnlineOffer>,
  ) { }

  create(createOnlineOfferDto: CreateOnlineOfferDto): Promise<OnlineOffer> {
    const area = this.onlineOfferRepo.create(createOnlineOfferDto);
    return this.onlineOfferRepo.save(area);
  }

  findAll(): Promise<OnlineOffer[]> {
    return this.onlineOfferRepo.find();
  }

  findOne(id: number): Promise<OnlineOffer | null> {
    return this.onlineOfferRepo.findOneBy({ id });
  }

  async update(id: number, updateOnlineOfferDto: UpdateOnlineOfferDto): Promise<OnlineOffer | null> {
    await this.onlineOfferRepo.update(id, updateOnlineOfferDto);
    return this.onlineOfferRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.onlineOfferRepo.delete(id);
  }
}
