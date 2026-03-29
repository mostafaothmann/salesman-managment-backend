import { Injectable } from '@nestjs/common';
import { CreateOrderDto, FilterOrderProps } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    private readonly dataSource: DataSource
  ) { }

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const area = this.orderRepo.create(createOrderDto);
    return this.orderRepo.save(area);
  }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`
    SELECT o.id, o.created_at, o.validated_at, o.salesman_id, o.assistant_id, o.pharmacist_id,
     o.is_there_return, o.base_total_quantity, o.total_return_quantity, o.total_quantity,
      o.base_total_price, o.total_return_price, o.total_price, o.base_total_percentage,
       o.total_return_percentage, o.total_percentage, o.return_date, o.order_status,
        o.total_delivery_percentage, p.lan AS lan, p.lat AS lat, p.area_id AS area_id,
         p.street_id AS street_id FROM \`order\` o INNER JOIN pharmacist p ON p.id = o.pharmacist_id
     LIMIT ${limit} OFFSET ${offset};
   `);

    const totalResult = await this.dataSource.query(`
     SELECT COUNT(*) as total FROM \`order\`;
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
    filters: FilterOrderProps,
  ): Promise<Record<string, any>> {
    const query = this.orderRepo.createQueryBuilder('o')
      .select('o.id', 'id')
      .innerJoin('pharmacist', 'p', 'p.id = o.id')
      .addSelect('p.lan', 'lan')
      .addSelect('p.lat', 'lat')
      .addSelect('p.area_id', 'area_id')
      .addSelect('p.street_id', 'street_id')
      .addSelect('o.base_quantity', 'base_quantity')
      .addSelect('o.return_quantity', 'return_quantity')
      .addSelect('o.total_quantity', 'total_quantity')
      .addSelect('o.total_percentage', 'total_percentage')
      .addSelect('o.base_percentage', 'base_percentage')
      .addSelect('o.return_percentage', 'return_percentage')
      .addSelect('o.total_delivery_percentage', 'total_delivery_percentage')
      .addSelect('o.total_price', 'total_price')
      .addSelect('o.return_total_price', 'return_total_price')
      .addSelect('o.base_total_price', 'base_total_price')
      .addSelect('o.created_at', 'created_at')
      .addSelect('o.validated_at', 'validated_at')
      .addSelect('o.salesman_id', 'salesman_id')
      .addSelect('o.pharmacist_id', 'pharmacist_id')
      .addSelect('o.assistant_id', 'assistant_id')
      .addSelect('o.is_there_return', 'is_there_return')
      .addSelect('o.return_date', 'return_date')
      .addSelect('o.order_status', 'order_status')


    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity > 0) {
      query.andWhere(
        `o.total_quantity >= :minQuantity`,
        { minQuantity: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_max_quantity) && filters.filter_max_quantity > 0) {
      query.andWhere(
        `o.total_quantity <= :maxQuantity`,
        { maxQuantity: filters.filter_max_quantity },
      );
    }

    if (!isNaN(filters.filter_min_quantity) && filters.filter_min_quantity > 0) {
      query.andWhere(
        `o.total_quantity >= :minQuantity`,
        { minQuantity: filters.filter_min_quantity },
      );
    }

    if (!isNaN(filters.filter_min_total_price) && filters.filter_min_total_price > 0) {
      query.andWhere(
        `o.total_price  >= :minTotal`,
        { minTotal: filters.filter_min_total_price },
      );
    }

    if (!isNaN(filters.filter_max_total_price) && filters.filter_max_total_price > 0) {
      query.andWhere(
        `o.total_price  <= :maxTotal`,
        { maxTotal: filters.filter_max_total_price },
      );
      
    }

      if (!isNaN(filters.filter_order_status) && filters.filter_order_status > 0) {
      query.andWhere(
        `o.order_status  = :status`,
        { status: filters.filter_order_status },
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


  findOne(id: number): Promise<Order | null> {
    return this.orderRepo.findOneBy({ id });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order | null> {
    await this.orderRepo.update(id, updateOrderDto);
    return this.orderRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.orderRepo.delete(id);
  }
}
