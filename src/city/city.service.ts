import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepo: Repository<City>,
  ) { }
  create(createCityDto: CreateCityDto): Promise<City> {
    const city = this.cityRepo.create(createCityDto);
    return this.cityRepo.save(city);
  }

  findAll(): Promise<City[]> {
    return this.cityRepo.find({ relations: ['areas'] })
  }

  findOne(id: number): Promise<City | null> {
    return this.cityRepo.findOne({
      where: { id },
      relations: {
        areas: true,
      },
    })
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City | null> {
    await this.cityRepo.update({ id }, updateCityDto);
    return this.cityRepo.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.cityRepo.delete({ id });
  }
}
