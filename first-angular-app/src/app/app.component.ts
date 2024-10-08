import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.Component';
import { UserComponent } from './user/user.Component';
import {DUMMY_USERS} from './dummy-user'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = DUMMY_USERS

}
