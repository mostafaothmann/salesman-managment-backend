import { Injectable } from '@nestjs/common';
import { CreateOnlineCustomerDto } from './dto/create-online-customer.dto';
import { UpdateOnlineCustomerDto } from './dto/update-online-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OnlineCustomer } from './entities/online-customer.entity';
import { Repository } from 'typeorm';
import { UpdateOnlineOrderDto } from 'src/online-order/dto/update-online-order.dto';

@Injectable()
export class OnlineCustomerService {
  constructor(
    @InjectRepository(OnlineCustomer)
    private readonly onlineCustomerRepo: Repository<OnlineCustomer>,
  ) { }

  create(createOnlineCustomerDto: CreateOnlineCustomerDto): Promise<OnlineCustomer> {
    const area = this.onlineCustomerRepo.create(createOnlineCustomerDto);
    return this.onlineCustomerRepo.save(area);
  }

  findAll(): Promise<OnlineCustomer[]> {
    return this.onlineCustomerRepo.find();
  }

  findOne(id: number): Promise<OnlineCustomer | null> {
    return this.onlineCustomerRepo.findOneBy({ id });
  }

  async update(id: number, updateOnlineCustomerDto: UpdateOnlineCustomerDto): Promise<OnlineCustomer | null> {
    await this.onlineCustomerRepo.update(id, updateOnlineCustomerDto);
    return this.onlineCustomerRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.onlineCustomerRepo.delete(id);
  }
}
