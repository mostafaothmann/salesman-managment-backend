import { Injectable } from '@nestjs/common';
import { CreateSalesmanDto } from './dto/create-salesman.dto';
import { UpdateSalesmanDto } from './dto/update-salesman.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salesman } from './entities/salesman.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalesmanService {

  constructor(
    @InjectRepository(Salesman)
    private readonly salesmanRepo: Repository<Salesman>,
  ) { }

  create(createSalesmanDto: CreateSalesmanDto): Promise<Salesman> {
    const salesman = this.salesmanRepo.create(createSalesmanDto);
    return this.salesmanRepo.save(salesman);
  }

  findAll(): Promise<Salesman[]> {
    return this.salesmanRepo.find();
  }

  findOne(id: number): Promise<Salesman | null> {
    return this.salesmanRepo.findOneBy({ id });
  }

  async update(id: number, updateSalesmanDto: UpdateSalesmanDto): Promise<Salesman | null> {
    await this.salesmanRepo.update(id, updateSalesmanDto);
    return this.salesmanRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.salesmanRepo.delete(id);
  }

}

