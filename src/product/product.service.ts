import { Injectable } from '@nestjs/common';
import { CreateProductDto, FilterProductProps } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    private readonly dataSource: DataSource
  ) { }

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepo.create(createProductDto);
    return this.productRepo.save(product);
  }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`
    SELECT p.id,p.created_at,p.order_id,p.type_id,p.price_for_piece,
    p.base_quantity, p.return_quantity, p.total_quantity,
    p.base_total_price,p.return_total_price, p.total_price,p.return_discount,
    p.base_percentage,p.return_percentage,p.total_percentage,
    p.percentage_for_piece,p.delivery_percentage_for_piece,
    p.total_delivery_percentage
    FROM product p
    LIMIT ${limit} OFFSET ${offset};
  `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM product;
  `);
    const total = parseInt(totalResult[0].total, 10);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }


  async filter(
    filters: FilterProductProps,
  ): Promise<Record<string, any>> {

    const query = this.productRepo.createQueryBuilder('p')
      .select('p.id', 'id')
      .addSelect('p.total_quantity', 'total_quantity')
      .addSelect('p.base_quantity', 'base_quantity')
      .addSelect('p.return_quantity', 'return_quantity')
      .addSelect('p.total_price', 'total_price')
      .addSelect('p.type_id', 'type_id')
      .addSelect('p.order_id', 'order_id')
      .addSelect('p.created_at', 'created_at')


    if (!isNaN(filters.filter_type_id) && filters.filter_type_id != 0) {
      query.andWhere(
        `p.type_id = :typeId`,
        { typeId: filters.filter_type_id },
      );
    }

    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity > -1) {
      query.andWhere(
        `p.total_quantity >= :minQuantity`,
        { minQuantity: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_max_quantity) && filters.filter_max_quantity > -1) {
      query.andWhere(
        `p.total_quantity >= :maxQuantity`,
        { maxQuantity: filters.filter_max_quantity },
      );
    }



    // Pagination
    filters.limit = filters.limit > 100 ? 100 : filters.limit;
    filters.page = filters.page < 1 ? 1 : filters.page;
    const skip = (filters.page - 1) * filters.limit;
    query.skip(skip).take(filters.limit);
    const [data, total] = await Promise.all([
      query.getRawMany(),
      query.clone().getCount(),
    ]);

    return {
      data,
      total,
      page: filters.page,
      lastPage: Math.ceil(total / filters.limit),
    };
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

