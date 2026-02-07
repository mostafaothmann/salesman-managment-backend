import { Injectable } from '@nestjs/common';
import { CreateSalesmanAreaDto } from './dto/create-salesman-area.dto';
import { UpdateSalesmanAreaDto } from './dto/update-salesman-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salesman } from 'src/salesman/entities/salesman.entity';
import { Repository } from 'typeorm';
import { SalesmanArea } from './entities/salesman-area.entity';

@Injectable()
export class SalesmanAreaService {
  constructor(
    @InjectRepository(SalesmanArea)
    private readonly salesManAreaRepo: Repository<SalesmanArea>,
  ) { }

  create(createSalesmanAreaDto: CreateSalesmanAreaDto): Promise<SalesmanArea> {
    const salesMan = this.salesManAreaRepo.create(createSalesmanAreaDto);
    return this.salesManAreaRepo.save(salesMan);
  }

  findAll(): Promise<SalesmanArea[]> {
    return this.salesManAreaRepo.find();
  }

  findOne(id: number): Promise<SalesmanArea | null> {
    return this.salesManAreaRepo.findOneBy({ id });
  }

  async update(id: number, updateSalesmanAreaDto: UpdateSalesmanAreaDto): Promise<SalesmanArea | null> {
    await this.salesManAreaRepo.update(id, updateSalesmanAreaDto);
    return this.salesManAreaRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.salesManAreaRepo.delete(id);
  }

}
