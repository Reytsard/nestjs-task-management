import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './dto/Task.dto';
import { UpdatedTaskDTO } from './dto/UpdatedTask.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/')
  async getAllTasks() {
    return await this.taskService.findAll();
  }

  @Post('/add')
  async addTask(@Body() taskDTO: TaskDTO) {
    return await this.taskService.addTask(taskDTO);
  }

  @Put('/update')
  async updateTask(@Body() updatedTaskDTO: UpdatedTaskDTO) {
    return await this.taskService.updateTask(updatedTaskDTO);
  }

  @Delete('/delete')
  async deleteTask(@Query('id') taskId: number) {
    return await this.taskService.deleteTask(taskId);
  }
}
