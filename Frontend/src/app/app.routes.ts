import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Header } from './header/header';
import { Home } from './home/home';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeResolver } from './employee-resolver';
export const routes: Routes = [
    {
        
        path: 'employee',
        component: Employee,
        resolve: {employee: EmployeeResolver}
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
