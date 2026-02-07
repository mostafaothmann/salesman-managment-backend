import { Injectable } from '@nestjs/common';
import { CreateOnlineOrderDto } from './dto/create-online-order.dto';
import { UpdateOnlineOrderDto } from './dto/update-online-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OnlineOrder } from './entities/online-order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OnlineOrderService {
  constructor(
    @InjectRepository(OnlineOrder)
    private readonly onlineOrderRepo: Repository<OnlineOrder>,
  ) { }

  create(createOnlineOrderDto: CreateOnlineOrderDto): Promise<OnlineOrder> {
    const area = this.onlineOrderRepo.create(createOnlineOrderDto);
    return this.onlineOrderRepo.save(area);
  }

  findAll(): Promise<OnlineOrder[]> {
    return this.onlineOrderRepo.find();
  }

  findOne(id: number): Promise<OnlineOrder | null> {
    return this.onlineOrderRepo.findOneBy({ id });
  }

  async update(id: number, updateOnlineOrderDto: UpdateOnlineOrderDto): Promise<OnlineOrder | null> {
    await this.onlineOrderRepo.update(id, updateOnlineOrderDto);
    return this.onlineOrderRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.onlineOrderRepo.delete(id);
  }

}
