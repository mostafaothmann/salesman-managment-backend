import { Injectable } from '@nestjs/common';
import { CreateBaseGiftDto } from './dto/create-base-gift.dto';
import { UpdateBaseGiftDto } from './dto/update-base-gift.dto';
import { BaseGift } from './entities/base-gift.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class BaseGiftService {
  constructor(
    @InjectRepository(BaseGift)
    private readonly baseGiftRepo: Repository<BaseGift>,
    private readonly dataSource: DataSource

  ) { }

  create(baseGiftDto: CreateBaseGiftDto): Promise<BaseGift> {
    const baseGift = this.baseGiftRepo.create(baseGiftDto);
    return this.baseGiftRepo.save(baseGift);
  }

  findAll(): Promise<BaseGift[]> {
    return this.baseGiftRepo.find()
  }

  findOne(id: number): Promise<BaseGift | null> {
    return this.baseGiftRepo.findOneBy({ id });
  }

  async update(id: number, updateBaseGiftDto: UpdateBaseGiftDto): Promise<BaseGift | null> {
    await this.baseGiftRepo.update(id, updateBaseGiftDto);
    return this.baseGiftRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.baseGiftRepo.delete(id);
  }

  async getNames(): Promise<{ name: string }[] | []> {
    return this.dataSource.query(`select bg.name,bg.id from base_gift as bg`)
  }
}
