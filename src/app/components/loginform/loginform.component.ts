import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginModel } from '../dataModels/login';
import {RouterModule} from '@angular/router';
import { LoginpopupComponent } from "../popup/loginpopup/loginpopup.component";

@Component({
    selector: 'app-loginform',
    standalone: true,
    templateUrl: './loginform.component.html',
    styleUrl: './loginform.component.css',
    imports: [CommonModule, FormsModule, RouterModule, LoginpopupComponent]
})
export class LoginCompComponent {
  loginModel: loginModel[] = [];
  newUser: loginModel = { username: '', password: '', id: 0 };
  nextId = 1;

  addUser() {
    this.loginModel.push(this.newUser);
    this.newUser.id = this.nextId++;
    console.log(this.newUser.id + this.newUser.username + this.newUser.password);
    this.newUser = { username: '', password: '', id: 0 };
    console.log(this.loginModel)
  }

  elementDisplay: string = 'none';
  showElement(): void {
    this.elementDisplay = 'block';
  }
}
