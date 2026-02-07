import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
  ) { }

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const area = this.orderRepo.create(createOrderDto);
    return this.orderRepo.save(area);
  }

  findAll(): Promise<Order[]> {
    return this.orderRepo.find();
  }

  findOne(id: number): Promise<Order | null> {
    return this.orderRepo.findOneBy({ id });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order | null> {
    await this.orderRepo.update(id, updateOrderDto);
    return this.orderRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.orderRepo.delete(id);
  }
}
