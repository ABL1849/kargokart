import { Component } from '@angular/core';
import { RegisterCompComponent } from "../registerform/registerform.component";
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-registerpage',
    standalone: true,
    templateUrl: './registerpage.component.html',
    styleUrl: './registerpage.component.css',
    imports: [RegisterCompComponent, RouterModule],
})
export class RegisterpageComponent {

}
