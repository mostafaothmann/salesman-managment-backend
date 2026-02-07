import { Module } from '@nestjs/common';
import { OnlineCustomerService } from './online-customer.service';
import { OnlineCustomerController } from './online-customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnlineCustomer } from './entities/online-customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OnlineCustomer])],
  controllers: [OnlineCustomerController],
  providers: [OnlineCustomerService],
})
export class OnlineCustomerModule { }
