import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  email: string='';
  password: string='';

  constructor(private auth:AuthService){}


  ngOnInit(): void {
      
  }

  loging(){
    if(this.email==''){
      alert('Please Enter Email');
      return;
    }

    if(this.password==''){
      alert('Please Enter Password');
      return;
    }

    this.auth.login(this.email, this.password);

    this.email='';
    this.password='';
  }

}
