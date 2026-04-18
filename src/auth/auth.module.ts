import { AdminService } from 'src/admin/admin.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/auth/configs/jwt-secret';
import { SalesmanModule } from 'src/salesman/salesman.module';
import { AssistantModule } from 'src/assistant/assistant.module';
import { AdminModule } from 'src/admin/admin.module';
import { AssistantService } from 'src/assistant/assistant.service';
import { SalesmanService } from 'src/salesman/salesman.service';

@Module({
  imports: [
    SalesmanModule,
    AssistantModule,
    AdminModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),],
  controllers: [
    AuthController,
  ],
  providers: [AuthService],
  exports: [AuthService],

})
export class AuthModule { }
