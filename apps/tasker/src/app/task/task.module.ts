import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { TaskRoutingModule } from './task.routing';
import { TaskRoutingComponent } from './task.component';
import { InsertTaskComponent } from './components/insert-task/insert-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';




const Material_Module: any[] = [
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatIconModule
];

@NgModule({
  declarations: [
    TaskRoutingComponent,
    InsertTaskComponent,
    TasksListComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    Material_Module,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TaskModule {}
