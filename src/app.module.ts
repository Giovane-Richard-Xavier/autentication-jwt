import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { OfficeModule } from './office/office.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, PrismaModule, DepartmentModule, OfficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
