import { Injectable } from '@nestjs/common';
import { CreateRecoveryCaseImageDto } from './dto/create-recovery-case-image.dto';
import { UpdateRecoveryCaseImageDto } from './dto/update-recovery-case-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RecoveryCaseImage } from './entities/recovery-case-image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecoveryCaseImageService {
  constructor(
    @InjectRepository(RecoveryCaseImage)
    private readonly recoveryCaseImageRepo: Repository<RecoveryCaseImage>,
  ) { }

  create(createRecoveryCaseImageDto: CreateRecoveryCaseImageDto): Promise<RecoveryCaseImage> {
    const area = this.recoveryCaseImageRepo.create(createRecoveryCaseImageDto);
    return this.recoveryCaseImageRepo.save(area);
  }

  findAll(): Promise<RecoveryCaseImage[]> {
    return this.recoveryCaseImageRepo.find();
  }

  findOne(id: number): Promise<RecoveryCaseImage | null> {
    return this.recoveryCaseImageRepo.findOneBy({ id });
  }

  async update(id: number, updateRecoveryCaseImageDto: UpdateRecoveryCaseImageDto): Promise<RecoveryCaseImage | null> {
    await this.recoveryCaseImageRepo.update(id, updateRecoveryCaseImageDto);
    return this.recoveryCaseImageRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.recoveryCaseImageRepo.delete(id);
  }
}
