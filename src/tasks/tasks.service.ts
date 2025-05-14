import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks() {
    return [
      { id: 1, name: 'Tarea 1' },
      { id: 2, name: 'Tarea 2' },
    ];
  }

  updateTaskById(@Param('id') id: string) {
    return `Acualizando la tarea con id: ${id}`;
  }

  createTask() {
    return 'Creando una nueva tarea';
  }
  deleteTask(@Param('id') id: string) {
    return `Borrando una tarea con id: ${id}`;
  }
  updateTaskStatus(@Param('id') id: string) {
    return `Actualizando el estado de la tarea con el id: ${id}`;
  }
}
