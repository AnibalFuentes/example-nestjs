import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): CreateTaskDto[] {
    return this.tasks;
  }
  getTaskById(id: number) {
    const result = this.tasks.find((task) => task.id === id);
    if (!result) {
      throw new NotFoundException(`No se encontró la tarea con el id: ${id}`);
    }
    return result;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return `Acualizando la tarea con titulo: ${task.title}`;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    try {
      this.tasks.push({
        ...task,
        id: this.tasks.length + 1,
      });
      return task;
    } catch (error) {
      return {
        message: `Error al crear la tarea: ${error}`,
        status: 500,
      };
    }
  }
  deleteTask(id: number) {
    return `Borrando una tarea con id: ${id}`;
  }
  updateTaskStatus(id: number) {
    return `Actualizando el estado de la tarea con el id: ${id}`;
  }
}
