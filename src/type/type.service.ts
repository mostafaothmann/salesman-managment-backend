import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './entities/type.entity';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepo: Repository<Type>,
    private readonly dataSource: DataSource
  ) { }

  create(createTypeDto: CreateTypeDto): Promise<Type> {
    const type = this.typeRepo.create(createTypeDto);
    return this.typeRepo.save(type);
  }

  findAll(): Promise<Type[]> {
    return this.typeRepo.find();
  }

  findOne(id: number): Promise<Type | null> {
    return this.typeRepo.findOneBy({ id });
  }

  async update(id: number, updateTypeDto: UpdateTypeDto): Promise<Type | null> {
    await this.typeRepo.update(id, updateTypeDto);
    return this.typeRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.typeRepo.delete(id);
  }

  async getSamplesDoctors(id: number): Promise<void> {
    return await this.dataSource.query(`select id,quantity from sample_doctor where type_id=${id}`)
  }

  async getSamplesPharmacists(id: number): Promise<void> {
    return await this.dataSource.query(`select sp.id,sp.quantity from sample_pharmacist sp where sp.type_id=${id}`)
  }

  async getSpecializations(id: number): Promise<void> {
    return await this.dataSource.query(`SELECT s.id as id, s.name as name, COUNT(d.id) AS doctor_count FROM 
      specialization s INNER JOIN specialization_type st ON s.id = st.specialization_id INNER JOIN 
      doctor d ON s.id = d.specialization_id WHERE st.type_id = ${id} GROUP BY s.id, s.name;
`)
  }
  async getVisitsDoctors(id: number): Promise<void> {
    return await this.dataSource.query(`select dv.id,dv.note,dv.salesman_id,dv.doctor_id,dv.id,dv.created_at
       from doctor_visit dv where dv.type_id=${id}`)
  }

  async getVisitsPharmacists(id: number): Promise<void> {
    return await this.dataSource.query(`select pv.id,pv.note,pv.salesman_id,pv.pharmacist_id,pv.id,pv.created_at
       from pharmacist_visit pv where pv.type_id=${id}`)
  }

  async getProducts(id: number): Promise<void> {
    return await this.dataSource.query(`select p.id,p.total_price,p.has_return,p.total_quantity,p.order_id,pv.created_at
       from product p where p.type_id=${id}`)
  }

  async getOnlineProducts(id: number): Promise<void> {
    return await this.dataSource.query(`select p.id,p.total_price,p.has_return,p.total_quantity,p.order_id,pv.created_at
       from online_product p where p.type_id=${id}`)
  }

  async getRecoveryCases(id: number): Promise<void> {
    return await this.dataSource.query(`select rc.id,rc.total_price,rc.has_return,rc.total_quantity,rc.order_id,rc.created_at
       from recovery_case rc where rc.type_id=${id}`)
  }

  async getBaseOffers(id: number): Promise<void> {
    return await this.dataSource.query(`select *
       from base_offer bs where bs.type_id=${id}`)
  }

  async getIngredients(id: number): Promise<void> {
    return await this.dataSource.query(`select i.name,ti.quantity_percentage from
       type_ingredient ti INNER JOIN ingredient i where ti.type_id=${id} `)
  }
}
