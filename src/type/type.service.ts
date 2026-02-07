import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './entities/type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepo: Repository<Type>,
  ) { }

  create(createTypeDto: CreateTypeDto): Promise<Type> {
    const type = this.typeRepo.create(createTypeDto);
    return this.typeRepo.save(type);
  }

  findAll(): Promise<Type[]> {
    return this.typeRepo.find();
  }

  findOne(id: number): Promise<Type | null> {
    return this.typeRepo.findOneBy({ id });
  }

  async update(id: number, updateTypeDto: UpdateTypeDto): Promise<Type | null> {
    await this.typeRepo.update(id, updateTypeDto);
    return this.typeRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.typeRepo.delete(id);
  }

}
