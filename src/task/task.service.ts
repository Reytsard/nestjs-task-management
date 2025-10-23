import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { TaskDTO } from './dto/Task.dto';
import { UpdatedTaskDTO } from './dto/UpdatedTask.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepository: Repository<Task>,
  ) {}

  async findAll() {
    const count = await this.tasksRepository.findAndCount();
    console.log(count);
    return await this.tasksRepository.find();
  }

  async findTaskWithId(taskId: number) {
    try {
      return await this.tasksRepository.findOneBy({ id: taskId });
    } catch (e: any) {
      return new HttpException('No Task Found With Id', HttpStatus.BAD_REQUEST);
    }
  }

  async addTask(newTask: TaskDTO) {
    const task = this.tasksRepository.create(newTask);
    return await this.tasksRepository.save(task);
  }

  async updateTask(updatedTask: UpdatedTaskDTO) {
    return await this.tasksRepository.update(updatedTask.id, updatedTask);
  }

  async deleteTask(taskId: number) {
    return await this.tasksRepository.delete({ id: taskId });
  }
}
