import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: "admin/main/products", component: AdminComponent},
  { path: "admin/main/products/create", component: AdminComponent},  
  { path: "admin/main/products/edit/1", component: AdminComponent},
  { path: "admin/main/orders", component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
