import { Module } from '@nestjs/common';
import { RecoveryCaseService } from './recovery-case.service';
import { RecoveryCaseController } from './recovery-case.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecoveryCase } from './entities/recovery-case.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecoveryCase])],
  controllers: [RecoveryCaseController],
  providers: [RecoveryCaseService],
})
export class RecoveryCaseModule { }
