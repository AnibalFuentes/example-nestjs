import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Delete,
  Body,
  Query,
  UsePipes,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.getTaskById(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    // console.log(task);
    return this.tasksService.createTask(task);
  }
  @Put('/:id')
  updateTaskById(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }
  @Patch('/:id')
  updateTaskStatusById(@Param('id') id: number) {
    return this.tasksService.updateTaskStatus(id);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(id);
  }
}
