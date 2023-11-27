import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StaticDataSource } from './model/static.datasource';
import { ProductRepository } from './model/product.repository';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from "./store/store.module";

@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    
  ],
  providers: [
    provideHttpClient(),
    StaticDataSource,
    ProductRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
