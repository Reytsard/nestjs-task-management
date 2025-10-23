import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { TaskDTO } from './dto/Task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepository: Repository<Task>,
  ) {}

  findAll() {
    return this.tasksRepository.find();
  }

  addTask(newTask: TaskDTO) {
    return this.tasksRepository.create(newTask);
  }
}
