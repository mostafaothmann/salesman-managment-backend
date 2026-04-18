import { AdminService } from './admin/admin.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ROLE } from './auth/enums/role.enum';
import { Admin } from 'typeorm';

async function seedAdmin(adminService: AdminService) {
  const adminEmail = 'rohAlaradadmin123@example.com';

  const existingAdmin = await adminService.findByEmail(adminEmail);

  if (!existingAdmin) {
    await adminService.create({
      username: 'rohAlaradAdmin',
      password: '#Roh111Admin#',
      role: ROLE.ADMIN,
      email: 'rohAlaradAdmin123@example.com',
    });
  } else {
    console.log('ℹ️ Admin already exists');
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const adminService = app.get(AdminService);

  await seedAdmin(adminService);

  app.enableCors({
    origin: '*', // or ['http://localhost:3000']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Serve uploads folder as static files
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });

  await app.listen(4000);
}
bootstrap();
