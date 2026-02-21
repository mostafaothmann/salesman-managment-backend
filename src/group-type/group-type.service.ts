import { Injectable } from '@nestjs/common';
import { CreateGroupTypeDto } from './dto/create-group-type.dto';
import { UpdateGroupTypeDto } from './dto/update-group-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupType } from './entities/group-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupTypeService {
  constructor(
    @InjectRepository(GroupType)
    private readonly groupTypeRepo: Repository<GroupType>,
  ) { }

  create(createTypeDto: CreateGroupTypeDto): Promise<GroupType> {
    const type = this.groupTypeRepo.create(createTypeDto);
    return this.groupTypeRepo.save(type);
  }

  findAll(): Promise<GroupType[]> {
    return this.groupTypeRepo.find({ relations: ['types'] });
  }

  findOne(id: number): Promise<GroupType | null> {
    return this.groupTypeRepo.findOne({
      where: { id },
      relations: {
        types: true,
      },
    });
  }

  async update(id: number, updateGroupTypeDto: UpdateGroupTypeDto): Promise<GroupType | null> {
    await this.groupTypeRepo.update(id, updateGroupTypeDto);
    return this.groupTypeRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.groupTypeRepo.delete(id);
  }
}
