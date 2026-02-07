import { Injectable } from '@nestjs/common';
import { CreateAssosiationDto } from './dto/create-assosiation.dto';
import { UpdateAssosiationDto } from './dto/update-assosiation.dto';

@Injectable()
export class AssosiationService {
  create(createAssosiationDto: CreateAssosiationDto) {
    return 'This action adds a new assosiation';
  }

  findAll() {
    return `This action returns all assosiation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assosiation`;
  }

  update(id: number, updateAssosiationDto: UpdateAssosiationDto) {
    return `This action updates a #${id} assosiation`;
  }

  remove(id: number) {
    return `This action removes a #${id} assosiation`;
  }
}
