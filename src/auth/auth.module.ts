import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/auth/configs/jwt-secret';
import { SalesmanModule } from 'src/salesman/salesman.module';
import { AssistantModule } from 'src/assistant/assistant.module';
import { AuthAssistantController } from './authAssistant.controller';
import { AuthSalesmanController } from './authSalesman.controller';

@Module({
  imports: [
    SalesmanModule,
    AssistantModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),],
  controllers: [
    AuthController,
    AuthSalesmanController,
    AuthAssistantController],
  providers: [AuthService],
  exports: [AuthService],

})
export class AuthModule { }
