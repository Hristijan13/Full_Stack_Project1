import { Injectable, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
    
    employee: Employee = {

      employeeId: 0 ,
      employeeName: '',
      employeeContactNumber: '',
      emmployeeAdress:'',
      employeeGender:'',
      employeeDepartment:'',
      employeeSkills:'',
    }

    
    
       
    


    constructor() {
          
    }

    
}

