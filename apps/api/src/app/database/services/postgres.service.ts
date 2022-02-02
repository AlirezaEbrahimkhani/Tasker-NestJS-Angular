import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class PostgresService {
  private readonly _logger = new Logger(PostgresService.name);

  constructor(@Inject('DATABASE_POOL') private _pool: Pool) {}

  async executeQuery(
    queryText: string,
    values?: any
  ): Promise<QueryResult<any>> {
    this._logger.debug(`Executing query: ${queryText} (${values})`);
    return this._pool.query(queryText, values);
  }
}
