import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanOfficerDashboardComponent } from './loan-officer/loan-officer-dashboard/loan-officer-dashboard.component';
import { ViewLoanRequestsComponent } from './loan-officer/view-loan-requests/view-loan-requests.component';
import { PendingLoanRequestsComponent } from './loan-officer/pending-loan-requests/pending-loan-requests.component';
import { ReplyToEnquiryComponent } from './loan-officer/reply-to-enquiry/reply-to-enquiry.component';
import { UpdateProfileComponent } from './loan-officer/update-profile/update-profile.component';

const routes: Routes = [

  {
    path:'',component:LoanOfficerDashboardComponent,
    children: [
      {
        path:'viewloanrequests',component:ViewLoanRequestsComponent
        
      },
      {
        path:'pendingloanrequests',component:PendingLoanRequestsComponent
      },
      {
        path:'replytoenquiry',component:ReplyToEnquiryComponent
      },
      {
        path:'updateprofile',component:UpdateProfileComponent
      },
      {
        path:'**', component:LoanOfficerDashboardComponent
      }
    ],
    

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
