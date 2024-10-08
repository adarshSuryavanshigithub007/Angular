import { Component, computed, Input, signal } from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.Component.html',
  standalone: true,
  styleUrls: ['./user.Component.css']


})

export class UserComponent {

  @Input() avatar!: string
  @Input() name!: string

  get imagePath() {
    return 'assets/users/' + this.avatar
  }
  onSelectUser() {

  }

}
