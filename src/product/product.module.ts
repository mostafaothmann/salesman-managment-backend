import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { TypeModule } from 'src/type/type.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), TypeModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
