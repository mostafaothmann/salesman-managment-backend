import { Module } from '@nestjs/common';
import { RecoveryCaseImageService } from './recovery-case-image.service';
import { RecoveryCaseImageController } from './recovery-case-image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecoveryCaseImage } from './entities/recovery-case-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecoveryCaseImage])],
  controllers: [RecoveryCaseImageController],
  providers: [RecoveryCaseImageService],
})
export class RecoveryCaseImageModule { }
