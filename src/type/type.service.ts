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


  findOne(id: number): Promise<Type | null | null> {
    return this.typeRepo.findOneBy({ id });
  }

  async update(id: number, updateTypeDto: UpdateTypeDto): Promise<Type | null> {
    await this.typeRepo.update(id, updateTypeDto);
    return this.typeRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.typeRepo.delete(id);
  }

  async getDoctorsSamples(id: number): Promise<void> {
    return await this.dataSource.query(`select s.*,v.salesman_id,v.doctor_id from sample s  INNER JOIN visit v on s.visit_id = v.id where v.type_id=${id} AND v.typeC='doctor'`)
  }

  async getPharmacistsSamples(id: number): Promise<void> {
    return await this.dataSource.query(`select s.*,v.salesman_id,v.pharmacist_id from sample s  INNER JOIN visit v on s.visit_id = v.id where v.type_id=${id} AND v.typeC='pharmacist'`)
  }

  async getSpecializations(id: number): Promise<void> {
    return await this.dataSource.query(`SELECT s.id as id, s.name as name, COUNT(d.id) AS doctor_count FROM 
      specialization s INNER JOIN specialization_type st ON s.id = st.specialization_id INNER JOIN 
      doctor d ON s.id = d.specialization_id WHERE st.type_id = ${id} GROUP BY s.id, s.name;
`)
  }
  async getDoctorsVisits(id: number): Promise<void> {
    return await this.dataSource.query(`select *
       from visit v where v.type_id=${id} AND v.typeC='doctor'`)
  }

  async getPharmacistsVisits(id: number): Promise<void> {
    return await this.dataSource.query(`select *
       from visit v where v.type_id=${id} AND v.typeC='pharmacist'`)
  }

  async getProducts(id: number): Promise<void> {
    return await this.dataSource.query(`select p.*
       from product p INNER JOIN \`order\` o  where p.type_id=${id} AND o.order_status=2`)
  }

  async getOffers(id: number): Promise<void> {
    return await this.dataSource.query(`select o.*
       from offer o INNER JOIN base_offer bo where bo.type_id=${id}`)
  }

  async getOnlineProducts(id: number): Promise<void> {
    return await this.dataSource.query(`select *
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

  async getOrders(id: number): Promise<void> {
    return await this.dataSource.query(`select o.*
       from \`order\`  o INNER JOIN product p on p.order_id = o.id AND p.type_id=${id} `)
  }

  async getIngredients(id: number): Promise<void> {
    return await this.dataSource.query(`select i.name,ti.quantity_percentage from
       type_ingredient ti INNER JOIN ingredient i where ti.type_id=${id} `)
  }

  async getNames(): Promise<{ name: string }[] | []> {
    return this.dataSource.query(`select t.name,t.id from type as t`)
  }
}
