import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly _tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this._tasksService.getTasks();
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    return this._tasksService.deleteTask(id);
  }

  @Post()
  insertTask(@Body() task) {
    return this._tasksService.insertTask(task);
  }
}
