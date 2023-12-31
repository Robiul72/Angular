import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // login method
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( (res)=>{
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard']);

      if(res.user?.emailVerified ==true){
        this.router.navigate(['dashboard']);
      }
      else{
        this.router.navigate(['varify-email']);
      }

    },
    err=>{
      alert('Incurret Email or  Password');
      this.router.navigate(['/login']);
    })
  }


// register method
register(email: string, password: string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then( (res)=>{
    alert('Registration Successful');
    this.router.navigate(['/login']);
    this.sendEmailForVarification(res.user);
  },
  err=>{
    alert(err.message);
    this.router.navigate(['/register']);
  })
}

// sign out
logout(){
  this.fireauth.signOut().then(()=>{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  },
  err=>{
    alert(err.message);
  })
}


// forget Password

forgotPassword(email: string ){
  this.fireauth.sendPasswordResetEmail(email).then(()=>{
    this.router.navigate(['/varify-email']);
  },
  err=>{
    alert('Something went wrong');
  }
  )
}

// email verification

sendEmailForVarification(user: any){
  user.sendEmailForVarification().then((res:any)=>{
    this.router.navigate(['/verify-email']);

  }, 
  (err: any )=>{
    alert('Something went wrong. Not able to sand mail to your email.')
  })
}


}
