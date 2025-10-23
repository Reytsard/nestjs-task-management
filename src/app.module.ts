import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { Task } from './entity/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'TMPass',
      database: 'TaskManagement',
      synchronize: true, //make sure to remove on production.
      entities: [Task],
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
