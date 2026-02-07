import { Module } from '@nestjs/common';
import { OnlineProductService } from './online-product.service';
import { OnlineProductController } from './online-product.controller';

@Module({
  controllers: [OnlineProductController],
  providers: [OnlineProductService],
})
export class OnlineProductModule {}
