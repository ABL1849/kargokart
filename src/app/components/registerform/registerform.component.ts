import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { registerModel }  from '../dataModels/register';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RegpopComponent } from "../popup/regpop/regpop.component";

@Component({
    selector: 'app-registerform',
    standalone: true,
    templateUrl: './registerform.component.html',
    styleUrl: './registerform.component.css',
    imports: [CommonModule, FormsModule, RouterModule, RegpopComponent]
})
export class RegisterCompComponent {
  constructor(public router: Router) {}
  registerModel: registerModel[] = [];
  newUser: registerModel = { id: 0, fname: '', lname: '', email: '', mobile: '', empDept: 'Not assigned', empRole: 'Not assigned', empStatus: 'Inactive' };
  nextId = 1;

  addUser() {
    this.registerModel.push(this.newUser);
    this.newUser.id = this.nextId++;
    this.newUser = { id: 0, fname: '', lname: '', email: '', mobile: '', empDept: 'Not assigned', empRole: 'Not assigned', empStatus: 'Inactive' };
    console.log(this.registerModel);
    // this.router.navigate(['/loginpage']);
  }
  elementDisplay: string = 'none';
  showElement(): void {
    this.elementDisplay = 'block';
  }
}