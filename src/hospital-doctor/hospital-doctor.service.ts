import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HospitalDoctor } from "./entities/hospital-doctor.entity";
import { CreateHospitalDoctorDto } from "./dto/create-hospital-doctor.dto";
import { UpdateHospitalDoctorDto } from "./dto/update-hospital-doctor.dto";


@Injectable()
export class HospitalDoctorService {
  constructor(
    @InjectRepository(HospitalDoctor)
    private readonly hospitalDoctorRepo: Repository<HospitalDoctor>,
  ) { }

  create(createHospitalDoctorDto: CreateHospitalDoctorDto): Promise<HospitalDoctor> {
    const type = this.hospitalDoctorRepo.create(createHospitalDoctorDto);
    return this.hospitalDoctorRepo.save(type);
  }

  findAll(): Promise<HospitalDoctor[]> {
    return this.hospitalDoctorRepo.find();
  }

  findOne(id: number): Promise<HospitalDoctor | null> {
    return this.hospitalDoctorRepo.findOneBy(
      { id }
    );
  }

  async update(id: number, updateHospitalDoctorDto: UpdateHospitalDoctorDto): Promise<HospitalDoctor | null> {
    await this.hospitalDoctorRepo.update(id, updateHospitalDoctorDto);
    return this.hospitalDoctorRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.hospitalDoctorRepo.delete(id);
  }
}
