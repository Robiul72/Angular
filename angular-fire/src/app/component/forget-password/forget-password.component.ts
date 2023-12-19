import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent implements OnInit{

  email: string='';


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
      
  }

  forgotPassword(){
    this.auth.forgotPassword(this.email);
    this.email ='';
  }

}
