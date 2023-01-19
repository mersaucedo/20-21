import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  user: User[] = []
  
  constructor(
    private userService : UserService
  ){ }

 ngOnInit(): void {
    this.userService.getAllUser()
   .subscribe((data) => 
    this.user = data)
  }

}
