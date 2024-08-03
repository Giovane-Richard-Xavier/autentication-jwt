import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [UsersModule, PrismaModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
