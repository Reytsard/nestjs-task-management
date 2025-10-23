import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './dto/Task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.findAll();
  }

  @Post('/add')
  addTask(@Body() taskDTO: TaskDTO) {
    return this.taskService.addTask(taskDTO);
  }
}
