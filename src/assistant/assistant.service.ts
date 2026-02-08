import { Injectable } from '@nestjs/common';
import { CreateAssistantDto } from './dto/create-assistant.dto';
import { UpdateAssistantDto } from './dto/update-assistant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Assistant } from './entities/assistant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssistantService {
  constructor(@InjectRepository(Assistant)
  private readonly assistantRepo: Repository<Assistant>) { }

  create(createAssistantDto: CreateAssistantDto): Promise<Assistant> {
    const assitant = this.assistantRepo.create(createAssistantDto);
    return this.assistantRepo.save(assitant)
  }

  findAll(): Promise<Assistant[]> {
    return this.assistantRepo.find();
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
}
