import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,    
    DashboardComponent, ForgetPasswordComponent, VarifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angular-fire-ddc27","appId":"1:455443502428:web:ae00c84bede06f10af5d99","storageBucket":"angular-fire-ddc27.appspot.com","apiKey":"AIzaSyAZiQR5-fmtPX_aPezQtaB_yFslch6UI0E","authDomain":"angular-fire-ddc27.firebaseapp.com","messagingSenderId":"455443502428"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    
  ],
  providers: [
    // provideClientHydration()
    {provide:FIREBASE_OPTIONS, useValue:environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
