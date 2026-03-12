import { Module } from '@nestjs/common';
import { BaseGiftService } from './base-gift.service';
import { BaseGiftController } from './base-gift.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseGift } from './entities/base-gift.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BaseGift])],
  controllers: [BaseGiftController],
  providers: [BaseGiftService],
})
export class BaseGiftModule { }
