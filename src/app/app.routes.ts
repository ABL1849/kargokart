import { Routes } from '@angular/router';
import { HeropageComponent } from './components/heropage/heropage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { EmplistComponent } from './components/emplist/emplist.component';

export const routes: Routes = [
    {path: '', component:HeropageComponent},
    {path: 'loginpage', component:LoginpageComponent},
    {path: 'registerpage', component:RegisterpageComponent},
    {path: 'list', component:EmplistComponent},
];
