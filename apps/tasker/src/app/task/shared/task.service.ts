import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpBaseService } from '../../core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private _tasks = new BehaviorSubject<any[]>([]);

  public get tasks(): Observable<any[]> {
    return this._tasks.asObservable();
  }

  constructor(private readonly _apiBuilderService: HttpBaseService) {}

  getTasks() {
    this._apiBuilderService.get$('tasks').subscribe((resp: any[]) => {
      this._tasks.next(resp);
    });
  }

  deleteTask(JobID) {
    this._apiBuilderService.delete$(`tasks/${JobID}`).subscribe((resp) => {
      this.getTasks();
    });
  }

  insertTask(task) {
    this._apiBuilderService.post$('tasks', task).subscribe((resp) => {
      // this.getTasks();
    });
  }
}
