import { Component } from '@angular/core';
import { LoginCompComponent } from "../loginform/loginform.component";
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-loginpage',
    standalone: true,
    templateUrl: './loginpage.component.html',
    styleUrl: './loginpage.component.css',
    imports: [LoginCompComponent, RouterModule],
})
export class LoginpageComponent {

}
