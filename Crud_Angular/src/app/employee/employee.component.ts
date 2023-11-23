import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import {  ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employeeModel: EmployeeModel=new EmployeeModel();
  formValue !: FormGroup;
  employeeData: any;

  constructor(private Api:ApiService, private formBuider: FormBuilder){ }

  ngOnInit(): void {

                      this.formValue = this.formBuider.group({
                                                                firstName: [''],
                                                                lastName: [''],
                                                                cell: [''],
                                                                email: [''],
                                                                salary: [''],

                                                              }
                                                            )                      
                    }


  saveEmployee(){

                    this.employeeModel.firstName = this.formValue.value.firstName;
                    this.employeeModel.lastName = this.formValue.value.lastName;
                    this.employeeModel.cell = this.formValue.value.cell;
                    this.employeeModel.email = this.formValue.value.email;
                    this.employeeModel.salary = this.formValue.value.salary;

                    this.Api.employeePost(this.employeeModel)
                    .subscribe(res=>{
                                      console.log("Data Save");
                                      this.formValue.reset();          
                                    },
                                err =>{
                                       alert("Data Not Save")
                                      }
                               )   
                }

}
