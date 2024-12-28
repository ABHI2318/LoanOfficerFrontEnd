import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoanOfficerModule } from './loan-officer/loan-officer.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
