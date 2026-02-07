import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepo: Repository<Area>,
  ) { }

  create(areaDto: CreateAreaDto): Promise<Area> {
    const area = this.areaRepo.create(areaDto);
    return this.areaRepo.save(area);
  }

  findAll(): Promise<Area[]> {
    return this.areaRepo.find();
  }

  findOne(id: number): Promise<Area | null> {
    return this.areaRepo.findOneBy({ id });
  }

  async update(id: number, updateAreaDto: UpdateAreaDto): Promise<Area | null> {
    await this.areaRepo.update(id, updateAreaDto);
    return this.areaRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.areaRepo.delete(id);
  }
  
}
