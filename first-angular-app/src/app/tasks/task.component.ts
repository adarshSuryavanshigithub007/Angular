import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input() name? : string

}
