import { Module } from '@nestjs/common';
import { BaseOfferService } from './base-offer.service';
import { BaseOfferController } from './base-offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseOffer } from './entities/base-offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BaseOffer])],
  controllers: [BaseOfferController],
  providers: [BaseOfferService],
  exports: [BaseOfferService]
})
export class BaseOfferModule { }
