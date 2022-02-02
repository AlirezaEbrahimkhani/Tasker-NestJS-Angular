import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskService } from '../../shared/task.service';

const USER_INFO = [
  {
    id: 22,
    title: 'John',
    status: 1,
    due_date: '2022-01-30',
    priority: 36,
    entity: 2,
    assignees: 2,
    desciption: 'hey you',
  },
  {
    id: 25,
    title: 'Muhi',
    status: 3,
    due_date: '2032-05-30',
    priority: 222,
    entity: 3,
    assignees: 4,
    desciption: "don't give up",
  },
];

@Component({
  selector: 'tasker-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  editUsr: any;
  oldUsr: any;
  editdisabled: boolean;
  dataSource = USER_INFO;
  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  displayedColumns: string[] = [
    'id',
    'title',
    'due_date',
    'status',
    'priority',
    'entity',
    'desciption',
    'action',
  ];

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks();
  }

  editROw(st: any) {
    this.editdisabled = false;
    this.editUsr = st && st.id ? st : {};
    this.oldUsr = { ...this.editUsr };
    console.log(this.oldUsr);
  }

  updateEdit(student) {
    this.editdisabled = true;
    this.editUsr = null;
    console.log(student);

    // let data = {
    //   sid: student.sid,
    //   firstName: student.first_name,
    //   lastName: student.last_name,
    //   dateOfBirth: student.date_of_birth,
    //   phoneNumber: student.phone_number,
    //   classID: student.classcid,
    // };
  }

  cancelEdit() {
    this.editUsr = null;
  }

  onDelete({ JobID }) {
    this.taskService.deleteTask(JobID);
  }
}
