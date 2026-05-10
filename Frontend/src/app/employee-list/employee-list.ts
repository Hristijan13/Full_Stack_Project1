import { Component } from '@angular/core';
import { EmployeeService } from '../employee';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-employee-list',
  imports: [MatTableModule, MatButtonModule, RouterModule, MatIcon],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

   employeeService : EmployeeService;
  
    displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber', 'emmployeeAdress','employeeGender','employeeDepartment',
      'employeeSkills','edit','delete'
    ];
    dataSource = new MatTableDataSource<Employee>();

    constructor(employeeS : EmployeeService,private router: Router) {
          this.employeeService = employeeS;
           this.getEmployeeList();
           
    }

   
    getEmployeeList() : void {
           this.employeeService.getEmployees().subscribe(
            {
              next: (res: Employee[]) => {
                this.dataSource.data = res;
                console.log(res)
              },
              error: (err: HttpErrorResponse) => {
                console.log(err)
              }
            }
           )

    }
    deleteEmployee(id: number): void {
       console.log(id);
       this.employeeService.deleteEmployee(id).subscribe(
        {
          next: (res) => {
            console.log(res);
            this.getEmployeeList(); // Automatically refresh the table after deleting
          },
          error: (err: HttpErrorResponse) => {
               console.log(err)
          }

        }
       )
        
    }
    updateEmployee(employeeId : number) : void {
           this.router.navigate(['/employee',{employeeId: employeeId}]);
    }
}
