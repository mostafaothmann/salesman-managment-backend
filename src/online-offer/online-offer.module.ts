import { Module } from '@nestjs/common';
import { OnlineOfferService } from './online-offer.service';
import { OnlineOfferController } from './online-offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnlineOffer } from './entities/online-offer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OnlineOffer])],
  controllers: [OnlineOfferController],
  providers: [OnlineOfferService],
})
export class OnlineOfferModule {}
