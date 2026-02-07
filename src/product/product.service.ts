import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) { }

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepo.create(createProductDto);
    return this.productRepo.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productRepo.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product | null> {
    await this.productRepo.update(id, updateProductDto);
    return this.productRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productRepo.delete(id);
  }
}

