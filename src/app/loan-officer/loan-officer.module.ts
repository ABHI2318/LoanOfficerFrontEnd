import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanOfficerDashboardComponent } from './loan-officer-dashboard/loan-officer-dashboard.component';
import { ViewLoanRequestsComponent } from './view-loan-requests/view-loan-requests.component';
import { ReplyToEnquiryComponent } from './reply-to-enquiry/reply-to-enquiry.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PendingLoanRequestsComponent } from './pending-loan-requests/pending-loan-requests.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoanOfficerDashboardComponent,
    ViewLoanRequestsComponent,
    ReplyToEnquiryComponent,
    UpdateProfileComponent,
    PendingLoanRequestsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,                // <-- Add this
   
  ]
})
export class LoanOfficerModule { }
