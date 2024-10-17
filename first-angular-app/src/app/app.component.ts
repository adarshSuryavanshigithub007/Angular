import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.Component';
import { UserComponent } from './user/user.Component';
import { DUMMY_USERS } from './dummy-user'

import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = DUMMY_USERS
  selectedUserId = 'u1'
  userSelected?: any;

  get selectedUser() {
    console.log(this.users.find((user) => user.id === this.selectedUserId))
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string) {
    console.log(id)
    this.selectedUserId = id
    console.log(id)
  }

}
