import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateOnlineOrderDto } from 'src/online-order/dto/update-online-order.dto';
import { OnlineProduct } from './entities/online-product.entity';
import { CreateOnlineProductDto } from './dto/create-online-product.dto';
import { UpdateOnlineProductDto } from './dto/update-online-product.dto';

@Injectable()
export class OnlineProductService {
  constructor(
    @InjectRepository(OnlineProduct)
    private readonly onlineProductRepo: Repository<OnlineProduct>,
  ) { }

  create(createOnlineProductDto: CreateOnlineProductDto): Promise<OnlineProduct> {
    const area = this.onlineProductRepo.create(createOnlineProductDto);
    return this.onlineProductRepo.save(area);
  }

  findAll(): Promise<OnlineProduct[]> {
    return this.onlineProductRepo.find();
  }

  findOne(id: number): Promise<OnlineProduct | null> {
    return this.onlineProductRepo.findOneBy({ id });
  }

  async update(id: number, updateOnlineProductDto: UpdateOnlineProductDto): Promise<OnlineProduct | null> {
    await this.onlineProductRepo.update(id, updateOnlineProductDto);
    return this.onlineProductRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.onlineProductRepo.delete(id);
  }
}
