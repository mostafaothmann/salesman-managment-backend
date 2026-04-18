import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/auth/utils.ts/bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepo: Repository<Admin>,
  ) { }


  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    createAdminDto.password = encodePassword(createAdminDto.password)
    const admin = await this.adminRepo.create(createAdminDto);
    return this.adminRepo.save(admin);
  }

  /*   findAll() {
      return `This action returns all admin`;
    } */

  async findOne(id: number): Promise<Admin | null> {
    return await this.adminRepo.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<Admin | null> {
    return await this.adminRepo.findOneBy({ email });
  }

  /*   update(id: number, updateAdminDto: UpdateAdminDto) {
      return `This action updates a #${id} admin`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} admin`;
    } */
}
