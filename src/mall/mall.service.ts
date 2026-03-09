import { Injectable } from '@nestjs/common';
import { CreateMallDto } from './dto/create-mall.dto';
import { UpdateMallDto } from './dto/update-mall.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mall } from './entities/mall.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MallService {
  constructor(
    @InjectRepository(Mall)
    private readonly mallRepo: Repository<Mall>,
    private readonly dataSource: DataSource
  ) { }

  create(createMallDto: CreateMallDto): Promise<Mall> {
    const area = this.mallRepo.create(createMallDto);
    return this.mallRepo.save(area);
  }

  findAll(): Promise<Mall[]> {
    return this.mallRepo.find();
  }

  findOne(id: number): Promise<Mall | null> {
    return this.mallRepo.findOneBy({ id });
  }

  async update(id: number, updateMallDto: UpdateMallDto): Promise<Mall | null> {
    await this.mallRepo.update(id, updateMallDto);
    return this.mallRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.mallRepo.delete(id);
  }
}
