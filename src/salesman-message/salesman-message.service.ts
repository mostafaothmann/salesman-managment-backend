import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { SalesmanMessage } from './entities/salesman-message.entity';
import { CreateSalesmanMessageDto, FitlerSalesmanMessageProps } from './dto/create-salesman-message.dto';
import { UpdateSalesmanMessageDto } from './dto/update-salesman-message.dto';

@Injectable()
export class SalesmanMessageService {
  constructor(
    @InjectRepository(SalesmanMessage)
    private readonly salesmanMessageRepo: Repository<SalesmanMessage>,
    private readonly dataSource: DataSource
  ) { }

  create(salesmanMessageDto: CreateSalesmanMessageDto): Promise<SalesmanMessage> {
    const salesmanMessage = this.salesmanMessageRepo.create(salesmanMessageDto);
    return this.salesmanMessageRepo.save(salesmanMessage);
  }


  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`
    SELECT sm.id, sm.title, sm.content, sm.salesman_id,sm.created_at
    FROM salesman_message sm
    LIMIT ${limit} OFFSET ${offset};
  `);

    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM salesman_message;
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
    filters: FitlerSalesmanMessageProps,
  ): Promise<Record<string, any>> {

    const query = this.salesmanMessageRepo.createQueryBuilder('sm')
      .select('sm.id', 'id')
      .addSelect('sm.title', 'title')
      .addSelect('sm.content', 'content')
      .addSelect('sm.salesman_id', 'salesman_id')
      .addSelect('sm.created_at', 'created_at')

    if (filters.filter_title) {
      const title = filters.filter_title;
      query.andWhere(
        `sm.title LIKE :search`,
        { search: `%${title}%` },
      );
    }

    if (!isNaN(filters.filter_salesman_id) && filters.filter_salesman_id != 0) {
      query.andWhere(
        `sm.salesman_id = :salesmanId`,
        { salesmanId: filters.filter_salesman_id },
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

  findOne(id: number): Promise<SalesmanMessage | null> {
    return this.salesmanMessageRepo.findOneBy({ id });
  }

  async update(id: number, updateSalesmanMessageDto: UpdateSalesmanMessageDto): Promise<SalesmanMessage | null> {
    await this.salesmanMessageRepo.update(id, updateSalesmanMessageDto);
    return this.salesmanMessageRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.salesmanMessageRepo.delete(id);
  }



}
