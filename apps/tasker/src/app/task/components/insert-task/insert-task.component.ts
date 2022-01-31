import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
    { label: 'received', code: 1 },
    { label: 'Waiting', code: 2 },
    { label: 'In Process', code: 3 },
    { label: 'Ready', code: 4 },
    { label: 'Finished', code: 5 },
    { label: 'Suspended', code: 6 },
  ];
  priorities = new FormControl();
  priorityList: DataModel[] = [
    { label: 'Essential', code: 1 },
    { label: 'Important', code: 2 },
    { label: 'Normal', code: 3 },
  ];
  entities = new FormControl();
  entityList: DataModel[] = [
    { label: 'Ticket', code: 1 },
    { label: 'Task', code: 2 },
    { label: 'Meeting', code: 3 },
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
    title: '',
    due_date: '',
    statuses: '',
    priorities: '',
    entities: '',
    assignees: '',
    desciption: '',
  });

  constructor(
    private readonly fb: FormBuilder,
    // public st: StudentService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.st.getGradelevel();
  }

  onInsert() {
    // this.st.student_insert(this.form.value).subscribe((res) => {
    //   if (res.Success) {
    //     this.router.navigate(['/student/student-list']);
    //   }
    // });
    this.router.navigate(['/task/tasks-list']);
  }
}
