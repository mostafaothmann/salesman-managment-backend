import { Injectable } from '@nestjs/common';
import { CreateRecoveryCaseDto } from './dto/create-recovery-case.dto';
import { UpdateRecoveryCaseDto } from './dto/update-recovery-case.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RecoveryCase } from './entities/recovery-case.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecoveryCaseService {
  constructor(
    @InjectRepository(RecoveryCase)
    private readonly recoveryCaseRepo: Repository<RecoveryCase>,
  ) { }

  create(createRecoveryCaseDto: CreateRecoveryCaseDto): Promise<RecoveryCase> {
    const area = this.recoveryCaseRepo.create(createRecoveryCaseDto);
    return this.recoveryCaseRepo.save(createRecoveryCaseDto);
  }

  findAll(): Promise<RecoveryCase[]> {
    return this.recoveryCaseRepo.find();
  }

  findOne(id: number): Promise<RecoveryCase | null> {
    return this.recoveryCaseRepo.findOneBy({ id });
  }

  async update(id: number, updateRecoveryCaseDto: UpdateRecoveryCaseDto): Promise<RecoveryCase | null> {
    await this.recoveryCaseRepo.update(id, updateRecoveryCaseDto);
    return this.recoveryCaseRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.recoveryCaseRepo.delete(id);
  }
}


