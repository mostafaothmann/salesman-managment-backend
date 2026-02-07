import { Injectable } from '@nestjs/common';
import { CreateOnlineProductDto } from './dto/create-online-product.dto';
import { UpdateOnlineProductDto } from './dto/update-online-product.dto';

@Injectable()
export class OnlineProductService {
  create(createOnlineProductDto: CreateOnlineProductDto) {
    return 'This action adds a new onlineProduct';
  }

  findAll() {
    return `This action returns all onlineProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onlineProduct`;
  }

  update(id: number, updateOnlineProductDto: UpdateOnlineProductDto) {
    return `This action updates a #${id} onlineProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} onlineProduct`;
  }
}
