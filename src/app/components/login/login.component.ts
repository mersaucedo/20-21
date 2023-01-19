import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


interface Token {
  
  name: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private json: LoginService) {}
  username: string = '';
  password: string = '';
  enviarForm() {
    localStorage.setItem('token', this.username);
  }
}
