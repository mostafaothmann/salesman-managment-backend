import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './entities/offer.entity';
import { BaseOfferModule } from 'src/base-offer/base-offer.module';
import { TypeModule } from 'src/type/type.module';

@Module({
  imports: [TypeOrmModule.forFeature([Offer]), BaseOfferModule, TypeModule],
  controllers: [OfferController],
  providers: [OfferService],
})
export class OfferModule { }
