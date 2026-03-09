import { Injectable } from '@nestjs/common';
import { CreateSampleDoctorDto } from './dto/create-sample-doctor.dto';
import { UpdateSampleDoctorDto } from './dto/update-sample-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SampleDoctor } from './entities/sample-doctor.entity';
import { DataSource, Repository } from 'typeorm';


@Injectable()
export class SampleDoctorService {
  constructor(
    @InjectRepository(SampleDoctor)
    private readonly sampleRepo: Repository<SampleDoctor>,
    private readonly dataSource: DataSource
  ) { }

  create(createSampleDoctorDto: CreateSampleDoctorDto): Promise<SampleDoctor> {
    const sample = this.sampleRepo.create(createSampleDoctorDto);
    return this.sampleRepo.save(sample);
  }

  getAll(): Promise<SampleDoctor[]> {
    return this.sampleRepo.find();
  }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const data = await this.dataSource.query(`select * from sample_doctor
       LIMIT ${limit} OFFSET ${offset};
       `);
    const totalResult = await this.dataSource.query(`
    SELECT COUNT(*) as total FROM doctor_visit;
  `);
    const total = parseInt(totalResult[0].total, 10);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
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
