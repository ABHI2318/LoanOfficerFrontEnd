import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoanOfficerModule } from './loan-officer/loan-officer.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanOfficerService } from './services/loan-officer.service';
// Add this line to import the ServiceModule

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoanOfficerModule,
   // Add this line to import the LoanOfficerModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
