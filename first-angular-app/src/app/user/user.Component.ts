import { Component, EventEmitter, Input, Output, } from "@angular/core";


// type User = {
//   id: string;
//   name: string;
//   avatar: string
// }

interface User {
  id: string;
  name: string;
  avatar: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.Component.html',
  standalone: true,
  styleUrls: ['./user.Component.css']


})

export class UserComponent {
  @Input({ required: true }) user!: User
  @Output() select = new EventEmitter()

  // avatar = input.required<string>()
  // name =  input.required<string>()
  // imagePath = computed(()=>{ī
  //   return 'assets/users/' + this.avatar()
  // })
  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }
  onSelectUser() {
    console.log(this.user.id)
    this.select.emit(this.user.id)
  }

}
