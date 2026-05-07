import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-employee',
  imports: [MatFormFieldModule,MatInputModule,MatIconModule,MatSelectModule,MatRadioModule,MatCheckboxModule,MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

}
