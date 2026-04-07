import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepo: Repository<Area>,
    private readonly dataSource: DataSource

  ) { }

  create(areaDto: CreateAreaDto): Promise<Area> {
    const area = this.areaRepo.create(areaDto);
    return this.areaRepo.save(area);
  }

  findAll(): Promise<Area[]> {
    return this.areaRepo.find({ relations: ['streets'] });
  }

  findOne(id: number): Promise<Area | null> {
    return this.areaRepo.findOne({
      where: { id },
      relations: { streets: true }
    });
  }

  async update(id: number, updateAreaDto: UpdateAreaDto): Promise<Area | null> {
    await this.areaRepo.update(id, updateAreaDto);
    return this.areaRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.areaRepo.delete(id);
  }

  async getNames(): Promise<{ name: string }[] | []> {
    return this.dataSource.query(`select a.name,a.id from area as a`)
  }



  //for Profile Page

  async getDoctorVisits(id: number): Promise<void> {
    return await this.dataSource.query(`select v.* from visit v INNER JOIN salesman s on v.salesman_id=s.id where v.typeC='doctor' AND s.area_id=${id}`)
  }

  async getPharmacistVisits(id: number): Promise<void> {
    return await this.dataSource.query(`select v.* from visit v INNER JOIN salesman s on v.salesman_id=s.id where v.typeC='pharmacist' AND s.area_id=${id}`)
  }

  async getDoctors(id: number): Promise<void> {
    return await this.dataSource.query(`select * from doctor d where d.area_id=${id}`)
  }

  async getPharmacists(id: number): Promise<void> {
    return await this.dataSource.query(`select * from pharmacist p where p.area_id=${id}`)
  }

  async getDoctorsSamples(id: number): Promise<void> {
    return await this.dataSource.query(`select v.salesman_id,sa.* from sample sa INNER JOIN visit v on sa.visit_id = v.id  INNER JOIN salesman s where v.typeC='doctor' AND s.area_id=${id}`)
  }

  async getPharmacistsSamples(id: number): Promise<void> {
    return await this.dataSource.query(`select v.salesman_id,sa.* from sample sa INNER JOIN visit v on sa.visit_id = v.id  INNER JOIN salesman s where v.typeC='pharmacist' AND s.area_id=${id}`)
  }


  async getDoctorsGifts(id: number): Promise<void> {
    return await this.dataSource.query(`select v.salesman_id,v.doctor_id,gv.*,bg.name as name from gift_visit gv INNER JOIN base_gift bg INNER JOIN visit v on gv.visit_id = v.id  INNER JOIN salesman s where v.typeC='doctor' AND s.area_id=${id}`)
  }

  async getPharmacistsGifts(id: number): Promise<void> {
    return await this.dataSource.query(`select v.salesman_id,v.pharmacist_id,gv.*,bg.name as name from gift_visit gv INNER JOIN base_gift bg INNER JOIN visit v on gv.visit_id = v.id  INNER JOIN salesman s where v.typeC='pharmacist' AND s.area_id=${id}`)
  }

  async getOrders(id: number): Promise<void> {
    return await this.dataSource.query(`select o.* from \`order\` o INNER JOIN salesman s on o.salesman_id = s.id where s.area_id=${id}`)
  }

  async getStreets(id: number): Promise<void> {
    return await this.dataSource.query(`select * from street s where s.area_id=${id}`)
  }


  async getHospitals(id: number): Promise<void> {
    return await this.dataSource.query(`select * from hospital h where h.area_id = ${id}`)
  }

  async getMalls(id: number): Promise<void> {
    return await this.dataSource.query(`select * from mall m where m.area_id = ${id}`)
  }

  async getAssociations(id: number): Promise<void> {
    return await this.dataSource.query(`select * from association a where a.area_id = ${id}`)
  }



}
