import { Injectable } from '@nestjs/common';
import { CreateAssistantDto } from './dto/create-assistant.dto';
import { UpdateAssistantDto } from './dto/update-assistant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Assistant } from './entities/assistant.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AssistantService {
  constructor(@InjectRepository(Assistant)
  private readonly assistantRepo: Repository<Assistant>,
    private readonly dataSource: DataSource) { }

  create(createAssistantDto: CreateAssistantDto): Promise<Assistant> {
    const assitant = this.assistantRepo.create(createAssistantDto);
    return this.assistantRepo.save(assitant)
  }

  findAll(): Promise<Assistant[]> {
    return this.dataSource.query(`select a.id,a.first_name,a.last_name,a.phone_number,a.telephone_number,
      a.email,a.password,a.created_at,a.governorate_id,a.area_id,a.city_id,a.street_id,a.account_status_id from assistant a`)
  }

  findOne(id: number): Promise<Assistant | null> {
    return this.assistantRepo.findOneBy({ id })
  }

  findByEmail(email: string): Promise<Assistant | null> {
    return this.assistantRepo.findOneBy({ email });
  }

  async update(id: number, updateAssistantDto: UpdateAssistantDto): Promise<Assistant | null> {
    await this.assistantRepo.update(id, updateAssistantDto)
    return this.assistantRepo.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.assistantRepo.delete(id)
  }
  async getNames(): Promise<{ first_name: string, last_name: string }[] | []> {
    return await this.dataSource.query(`select a.id,a.first_name,a.last_name from assistant as a`)
  }


  //for Profile Page

  async getDoctorVisits(id: number): Promise<void> {
    return await this.dataSource.query(`select v.* from visit v where v.typeC='doctor' and v.assistant_id=${id}`)
  }

  async getPharmacistVisits(id: number): Promise<void> {
    return await this.dataSource.query(`select v.* from visit v where v.typeC='pharmacist' and v.assistant_id=${id}`)
  }

  async getOrders(id: number): Promise<void> {
    return await this.dataSource.query(`select o.* from \`order\` o where o.assistant_id=${id}`)
  }

}
