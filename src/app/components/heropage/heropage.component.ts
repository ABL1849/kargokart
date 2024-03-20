import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmplistComponent } from "../emplist/emplist.component";

@Component({
    selector: 'app-heropage',
    standalone: true,
    templateUrl: './heropage.component.html',
    styleUrl: './heropage.component.css',
    imports: [RouterModule, EmplistComponent]
})
export class HeropageComponent {

}
