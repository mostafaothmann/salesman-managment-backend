import { Injectable } from '@nestjs/common';
import { CreateGovernorateDto } from './dto/create-governorate.dto';
import { UpdateGovernorateDto } from './dto/update-governorate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Governorate } from './entities/governorate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GovernorateService {
  constructor(
    @InjectRepository(Governorate)
    private readonly governorateRepo: Repository<Governorate>,
  ) { }

  create(createGovernorateDto: CreateGovernorateDto): Promise<Governorate> {
    const governorate = this.governorateRepo.create(createGovernorateDto)
    return this.governorateRepo.save(governorate);
  }

  findAll(): Promise<Governorate[]> {
    return this.governorateRepo.find({relations:['cities']});
  }

  findOne(id: number): Promise<Governorate | null> {
    return this.governorateRepo.findOneBy({ id });
  }

  async update(id: number, updateGovernorateDto: UpdateGovernorateDto): Promise<Governorate | null> {
    await this.governorateRepo.update({ id }, updateGovernorateDto);
    return this.governorateRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.governorateRepo.delete({ id })
  }
}
