import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HospitalPharmacist } from "./entities/hospital-pharmacist.entity";
import { CreateHospitalPharmacistDto } from "./dto/create-hospital-pharmacist.dto";
import { UpdateHospitalPharmacistDto } from "./dto/update-hospital-pharmacist.dto";


@Injectable()
export class HospitalPharmacistService {
  constructor(
    @InjectRepository(HospitalPharmacist)
    private readonly hospitalPharmacistRepo: Repository<HospitalPharmacist>,
  ) { }

  create(createHospitalPharmacistDto: CreateHospitalPharmacistDto): Promise<HospitalPharmacist> {
    const type = this.hospitalPharmacistRepo.create(createHospitalPharmacistDto);
    return this.hospitalPharmacistRepo.save(type);
  }

  findAll(): Promise<HospitalPharmacist[]> {
    return this.hospitalPharmacistRepo.find();
  }

  findOne(id: number): Promise<HospitalPharmacist | null> {
    return this.hospitalPharmacistRepo.findOneBy(
      { id }
    );
  }

  async update(id: number, updateHospitalPharmacistDto: UpdateHospitalPharmacistDto): Promise<HospitalPharmacist | null> {
    await this.hospitalPharmacistRepo.update(id, updateHospitalPharmacistDto);
    return this.hospitalPharmacistRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.hospitalPharmacistRepo.delete(id);
  }
}
