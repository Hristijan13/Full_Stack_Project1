import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee as EmployeeModel } from '../employee.model';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../employee';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-employee',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatDividerModule,
    MatButtonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {

  private employeeService:EmployeeService;

    /*employee: EmployeeModel = {
             employeeName: '',
             employeeContactNumber: '',
             emmployeeAdress: '',
             employeeGender: '',
             employeeDepartment: '',
             employeeSkills: ''
            };
    */
  isCreateEmployee: boolean =  false;
            
  employee: any;

  skills : string[] = []

  private router: Router;
  constructor(employeeS: EmployeeService,routerG: Router,private activatedRoute: ActivatedRoute) {
        this.employeeService = employeeS;
        this.router = routerG;
  }

  ngOnInit(): void {
      this.employee = this.activatedRoute.snapshot.data['employee'];
      console.log(this.employee);
      if(this.employee && this.employee.employeeId  > 0) {
          this.isCreateEmployee = false;
          if(this.employee.employeeSkills != '') {
             this.skills = [];
             this.skills = this.employee.employeeSkills.split(',')
          }
      }
      else {
         this.isCreateEmployee = true;
      }
  }
  
  selectGender(gender: string): void {
          this.employee.employeeGender = gender;
  }
  
  onSkillsChanges(event: any): void {
        console.log(event)
        if(event.checked) {
          this.skills.push(event.source.value);

        }
        else {
          this.skills.forEach( (item,index) => {
            if(item == event.source.value) {
               this.skills.splice(index,1);
            } 
          })
        }

        this.employee.employeeSkills = this.skills.toString();
  }
  checkSkills(skill : string) {
    return this.employee.employeeSkills != null && this.employee.employeeSkills.includes(skill);
  }
  
  saveEmployee(employeeForm : NgForm) : void {
    if(this.isCreateEmployee) {


     this.employeeService.saveEmployee(this.employee).subscribe({
        next: (res: EmployeeModel) => {
             console.log(res);
             employeeForm.reset();
             this.employee.employeeGender = '';
             this.skills = [];
             this.employee.employeeSkills = '';
             this.router.navigate(["/employee-list"])
             
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }
  else {
     this.employeeService.updateEmployee(this.employee).subscribe(
      {
         next: (res: EmployeeModel) => {
            this.router.navigate(["/employee-list"]);
         },
         error: (err: HttpErrorResponse) => {
               console.log(err);
         }
      }
     )
  }
    
  }
}
