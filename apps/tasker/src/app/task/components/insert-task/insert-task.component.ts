import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TaskService } from '../../shared/task.service';

interface DataModel {
  label: string;
  code: number;
}

@Component({
  selector: 'tasker-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.scss'],
})
export class InsertTaskComponent implements OnInit {
  @Output() changeTab = new EventEmitter<number>();

  statuses = new FormControl();
  statusList: DataModel[] = [
    { label: 'received', code: 10 },
    { label: 'Waiting', code: 20 },
    { label: 'In Process', code: 30 },
    { label: 'Ready', code: 40 },
    { label: 'Finished', code: 50 },
    { label: 'Suspended', code: 60 },
  ];
  priorities = new FormControl();
  priorityList: DataModel[] = [
    { label: 'Essential', code: 1 },
    { label: 'Important', code: 2 },
    { label: 'Normal', code: 3 },
  ];
  entities = new FormControl();
  entityList: DataModel[] = [
    { label: 'جسابداری', code: 101 },
    { label: 'انبار', code: 102 },
    { label: 'store', code: 103 },
  ];
  assignees = new FormControl();
  assigneesList: DataModel[] = [
    { label: 'The Ali', code: 1 },
    { label: 'Alik', code: 2 },
    { label: 'Ebi', code: 3 },
  ];
  displayedColumns: string[] = [
    'title',
    'due_date',
    'statuses',
    'priorities',
    'entities',
    'assignees',
    'desciption',
    'action',
  ];

  form = this.fb.group({
    title: [null],
    due_date: [null],
    statuses: [null],
    priorities: [null],
    entities: [null],
    assignees: [null],
    desciption: [null],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly _taskService: TaskService
  ) {}
  ngOnInit(): void {}

  onInsert() {
    this._taskService.insertTask(this.form.value);
    // this.router.navigate(['/task/tasks-list']);
  }
}
