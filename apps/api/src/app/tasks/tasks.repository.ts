import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';
import { PostgresService } from '../database/services/postgres.service';
import { QUERIES } from './utils';

@Injectable()
export class TasksRepository {
  constructor(private readonly _postgresService: PostgresService) {}

  async getTasks(): Promise<QueryResult<any>> {
    return this._postgresService.executeQuery(QUERIES.GET_ALL_TASK);
  }
}
