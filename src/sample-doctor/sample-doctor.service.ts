import { Injectable } from '@nestjs/common';
import { CreateSampleDoctorDto } from './dto/create-sample-doctor.dto';
import { UpdateSampleDoctorDto } from './dto/update-sample-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SampleDoctor } from './entities/sample-doctor.entity';
import { Repository } from 'typeorm';


@Injectable()
export class SampleDoctorService {
  constructor(
    @InjectRepository(SampleDoctor)
    private readonly sampleRepo: Repository<SampleDoctor>,
  ) { }

  create(createSampleDoctorDto: CreateSampleDoctorDto): Promise<SampleDoctor> {
    const sample = this.sampleRepo.create(createSampleDoctorDto);
    return this.sampleRepo.save(sample);
  }

  findAll(): Promise<SampleDoctor[]> {
    return this.sampleRepo.find();
  }

  findOne(id: number): Promise<SampleDoctor | null> {
    return this.sampleRepo.findOneBy({ id });
  }

  async update(id: number, updateSampleDoctorDto: UpdateSampleDoctorDto): Promise<SampleDoctor | null> {
    await this.sampleRepo.update(id, updateSampleDoctorDto);
    return this.sampleRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.sampleRepo.delete(id);
  }

}
