import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';
import { PostgresService } from '../database/services/postgres.service';

@Injectable()
export class TasksRepository {
  constructor(private readonly _postgresService: PostgresService) {}

  async getTasks(): Promise<QueryResult<any>> {
    return this._postgresService.executeQuery(`select public.task_list();`);
  }

  async deleteTask(taskId) {
    return this._postgresService.executeQuery(
      `select public.task_delete(${taskId})`
    );
  }
}
