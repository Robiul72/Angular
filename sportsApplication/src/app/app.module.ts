// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { StoreComponent } from './store/store.component';
// import { StaticDataSource } from './model/static.datasource';
// import { ProductRepository } from './model/product.repository';
// import { provideHttpClient } from '@angular/common/http';
// import { StoreModule } from "./store/store.module";


// import { CheckoutComponent } from "./store/checkout.component";
// import { CartDetailComponent } from "./store/cartDetail.component";
// import { RouterModule } from "@angular/router";

// import { StoreFirstGuard } from "./storeFirst.guard";



// @NgModule({
//   declarations: [
//     AppComponent,

//   ],

//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     StoreModule,

//     // RouterModule.forRoot([
//     //   { path: "store", component: StoreComponent },
//     //   { path: "cart", component: CartDetailComponent },
//     //   { path: "checkout", component: CheckoutComponent },
//     //   { path: "**", redirectTo: "/store" }
//     //   ])    

//     RouterModule.forRoot([
//       {
//         path: "store", component: StoreComponent,
//         canActivate: [StoreFirstGuard]
//       },
//       {
//         path: "cart", component: CartDetailComponent,
//         canActivate: [StoreFirstGuard]
//       },
//       {
//         path: "checkout", component: CheckoutComponent,
//         canActivate: [StoreFirstGuard]
//       },
//       { path: "**", redirectTo: "/store" },

//       // {
//       //   path: "admin",
//       //   loadChildren: () => import("./admin/admin.module")
//       //   .then(m => m.AdminModule),
//       //   canActivate: [StoreFirstGuard]
//       //   },

//     ])],


//   providers: [    
//     provideHttpClient(),
//     StaticDataSource,
//     ProductRepository,
//     StoreFirstGuard,
//   ],

//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule, 
    
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },

      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "admin",
        loadChildren: () => import("./admin/admin.module")
          .then(m => m.AdminModule),
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/store" }
    ]),

    

    BrowserAnimationsModule,
           ServiceWorkerModule.register('ngsw-worker.js', {
             enabled: !isDevMode(),
             // Register the ServiceWorker as soon as the application is stable
             // or after 30 seconds (whichever comes first).
             registrationStrategy: 'registerWhenStable:30000'
           })],
  providers: [StoreFirstGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
