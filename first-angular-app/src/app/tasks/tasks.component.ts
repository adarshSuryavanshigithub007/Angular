import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId?: string

  tasks = [
    {
      id: "t1",
      title: "Master Angular",
      summary: "Learn all the basic and advanced features of Angular and how to apply them",
      dueDate: "2025-12-31",
      userId: "u1"
    },
    {
      id: "t2",
      title: "Learn JavaScript",
      summary: "Understand the fundamentals of JavaScript and how to use it for web development",
      dueDate: "2024-11-30",
      userId: "u2"
    },
    {
      id: "t3",
      title: "Explore TypeScript",
      summary: "Gain expertise in TypeScript for scalable and maintainable code",
      dueDate: "2025-01-15",
      userId: "u3"
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

}
