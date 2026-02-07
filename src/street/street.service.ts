import { Injectable } from '@nestjs/common';
import { CreateStreetDto } from './dto/create-street.dto';
import { UpdateStreetDto } from './dto/update-street.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Street } from './entities/street.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StreetService {
  constructor(
    @InjectRepository(Street)
    private readonly streetRepo: Repository<Street>,
  ) { }

  create(createStreetDto: CreateStreetDto): Promise<Street> {
    const area = this.streetRepo.create(createStreetDto);
    return this.streetRepo.save(area);
  }

  findAll(): Promise<Street[]> {
    return this.streetRepo.find();
  }

  findOne(id: number): Promise<Street | null> {
    return this.streetRepo.findOneBy({ id });
  }

  async update(id: number, updateStreetDto: UpdateStreetDto): Promise<Street | null> {
    await this.streetRepo.update(id, updateStreetDto);
    return this.streetRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.streetRepo.delete(id);
  }

}
