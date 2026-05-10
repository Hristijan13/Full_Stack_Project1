import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Header } from './header/header';
import { Home } from './home/home';
import { EmployeeList } from './employee-list/employee-list';
export const routes: Routes = [
    {
        
        path: 'employee',
        component: Employee
    },

    {
        path: 'header',
        component: Header
    },
    {
        path: '',
        component: Home

    },
    {
        path: 'employee-list',
        component: EmployeeList
    }

];
