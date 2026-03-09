import { Module } from '@nestjs/common';
import { MallService } from './mall.service';
import { MallController } from './mall.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mall } from './entities/mall.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mall])],
  controllers: [MallController],
  providers: [MallService],
})
export class MallModule { }
