import { Module } from '@nestjs/common';
import { OnlineProductService } from './online-product.service';
import { OnlineProductController } from './online-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnlineProduct } from './entities/online-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OnlineProduct])],
  controllers: [OnlineProductController],
  providers: [OnlineProductService],
})
export class OnlineProductModule { }
