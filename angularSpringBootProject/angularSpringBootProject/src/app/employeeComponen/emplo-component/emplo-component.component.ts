import { Component, OnInit } from '@angular/core';
import { OwnerModel } from '../../restOwnerModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwnerServicesService } from '../../service/owner-services.service';

@Component({
  selector: 'app-emplo-component',
  templateUrl: './emplo-component.component.html',
  styleUrl: './emplo-component.component.css'
})
export class EmploComponentComponent implements OnInit{

  ownerModel: OwnerModel=new OwnerModel();
  formValue!: FormGroup;
  ownerData:any;

  constructor(private owener:OwnerServicesService, private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.getAll();
    this.onInitializeForm();
  }

  getAll():void{
     this.owener.ownerGet()
    .subscribe(res=>{
      this.ownerData=res;
    })
  }

  onInitializeForm():void{
    this.formValue=this.formBuilder.group({
      h_Rent_NID:[''],
      h_Rent_Owner_Name:[''],
      h_Rent_Date:[''],
      h_Rent_Email:[''],
      h_Rent_Mobile:[''],
   
    })
  }


  setOwnerModelForm():void{
    this.ownerModel.h_Rent_NID = this.formValue.value.h_Rent_NID;
    this.ownerModel.h_Rent_Owner_Name = this.formValue.value.h_Rent_Owner_Name;
    this.ownerModel.h_Rent_Date = this.formValue.value.h_Rent_Date;
    this.ownerModel.h_Rent_Email = this.formValue.value.h_Rent_Email;
    this.ownerModel.h_Rent_Mobile = this.formValue.value.h_Rent_Mobile;
    
  }

  saveOwner():void{
    this. setOwnerModelForm();

    this.owener.owmerPost(this.ownerModel)
    .subscribe(res=>{
      console.log(res);
      alert("Data Save");
      this.formValue.reset();
      this.getAll();
    },
    err=>{
      alert("Data Not Save");
    })
  }


  deleteOwner(row: any): void {
    // Check if this.ownerModel.id is defined
    if (this.ownerModel.id !== undefined) {
      this.owener.ownerDelete(this.ownerModel.id)
        .subscribe(
          (res) => {
            console.log(res);
            alert("Data Delete");
            this.formValue.reset();
            this.getAll();
          },
          (err) => {
            alert("Data Not Delete");
          }
        );
    } else {
      alert(" Please try again.");
    }
  }


  onEdit(row:any):void{
    this. setOwnerModelForm();

    this.ownerModel.id =row.id;

    this.formValue.controls['h_Rent_NID'].setValue(row.h_Rent_NID);
    this.formValue.controls['h_Rent_Owner_Name'].setValue(row.h_Rent_Owner_Name);
    this.formValue.controls['h_Rent_Date'].setValue(row.h_Rent_Date);
    this.formValue.controls['h_Rent_Email'].setValue(row.h_Rent_Email);
    this.formValue.controls['h_Rent_Mobile'].setValue(row.h_Rent_Mobile);
    
    // this.formValue.controls['hobby_reading'].setValue(row.hobby.includes('Reading'));
    // this.formValue.controls['hobby_gaming'].setValue(row.hobby.includes('Gaming'));

  }


  editOwner(): void {
    // Check if this.ownerModel.id is defined
    if (this.ownerModel.id !== undefined) {
      this.setOwnerModelForm();
  
      this.owener.ownerEdit(this.ownerModel.id, this.ownerModel)
        .subscribe(
          (res) => {
            console.log(res);
            alert("Data Update");
            this.formValue.reset();
            this.getAll();
          },
          (err) => {
            alert("Data Not Update");
          }
        );
    } else {
      alert(" Please try again.");
    }
  }


}
