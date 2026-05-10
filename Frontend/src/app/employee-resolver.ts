import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { routes } from "./app.routes";
import { EmployeeService } from "./employee";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Employee } from "./employee.model";

export const EmployeeResolver: ResolveFn<Employee> =
(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    employeeService: EmployeeService = inject(EmployeeService)) : Observable<Employee> => {
          const employeeId = route.paramMap.get("employeeId");
          if (employeeId) {
             return employeeService.getEmployee(Number(employeeId));
          }
          else {
             const employee: Employee = {
               employeeName: '',
               employeeContactNumber: '',
               emmployeeAdress: '',
               employeeGender: '',
               employeeDepartment: '',
               employeeSkills: ''
             };
             return of(employee);
          }
    }