import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask() {
    return this.tasksService.createTask();
  }
  @Put(':id')
  updateTaskById(@Param('id') id: string) {
    return this.tasksService.updateTaskById(id);
  }
  @Patch(':id')
  updateTaskStatusById(@Param('id') id: string) {
    return this.tasksService.updateTaskStatus(id);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
}
