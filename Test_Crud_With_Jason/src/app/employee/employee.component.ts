import { Component,OnInit } from '@angular/core';
import { EmployeeModel } from './employee.model';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
