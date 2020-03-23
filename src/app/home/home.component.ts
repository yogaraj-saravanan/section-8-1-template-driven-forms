import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // We get the below data from API
  tasksList: Task[] = [
    {
      id: 1,
      taskName: 'Create a component',
      creator: 'Yogi',
      assignee: 'Siddharth',
      status: 'Active',
      priority: 'high',
      details: 'You have to create a parent and child component in angular 8.',
      creationDate: new Date(11, 2, 2020)
    },
    {
      id: 2,
      taskName: 'Create a directive',
      creator: 'Rahul',
      assignee: 'Ponvel',
      status: 'Active',
      priority: 'low',
      details: 'You have to create and use a directive without template in angular 8.',
      creationDate: new Date(11, 2, 2020)
    },
    {
      id: 3,
      taskName: 'Design a Side bar',
      creator: 'Sakthi',
      assignee: 'Yogi',
      status: 'Closed',
      priority: 'low',
      details: 'To design a side Nav as requested by the designer with proper standards.',
      creationDate: new Date(11, 2, 2020)
    },
    {
      id: 4,
      taskName: 'Organize a tech talk',
      creator: 'Rahul',
      assignee: 'Yogi',
      status: 'Active',
      priority: 'low',
      details: 'To organize a tech talk by inviting presenter and people from other companies.',
      creationDate: new Date(11, 2, 2020)
    },
    {
      id: 5,
      taskName: 'Plan for ICL team lunch',
      creator: 'Ponvel',
      assignee: 'Siddharth',
      status: 'Active',
      priority: 'low',
      details: 'Send a meeting invite to people from Techie Blasters for the team lunch.',
      creationDate: new Date(11, 2, 2020)
    }
  ];

  taskSelected: Task = this.tasksList[0];

  constructor() {
  }

  ngOnInit() {
  }

  selectedTaskData = (task) => {
    this.taskSelected = task;
  }

}
