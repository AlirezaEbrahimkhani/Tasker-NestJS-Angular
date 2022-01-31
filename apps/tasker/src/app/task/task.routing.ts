import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTaskComponent } from './components/insert-task/insert-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskRoutingComponent } from './task.component';

const ROUTES: Routes = [
  {
    path: '',
    component: TaskRoutingComponent,
    children: [
      {
        path: 'insert-task',
        component: InsertTaskComponent,
      },
      {
        path: 'tasks-list',
        component: TasksListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
