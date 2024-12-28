import { Component, OnInit } from '@angular/core';
import { LoanOfficerService } from 'src/app/services/loan-officer.service';
type PageResponse<T> = {
  contents: T[];
  totalPages: number;
  totalElements?: number;
  pageSize?: number;
  lastPage?: boolean;
}; 

@Component({
  selector: 'app-view-loan-requests',
  templateUrl: './view-loan-requests.component.html',
  styleUrls: ['./view-loan-requests.component.css']
})


export class ViewLoanRequestsComponent implements OnInit {
  loanRequests: any[] = [];
  pageNumber = 0;
  pageSize = 10;
  officerId = 123; // example: get from route param or user context
  totalPages = 0;

  constructor(private loanOfficerService: LoanOfficerService) {}

  ngOnInit(): void {
    this.getLoanRequests();
  }

  getLoanRequests(): void {
    this.loanOfficerService
      .viewLoanRequests(this.officerId, this.pageNumber, this.pageSize)
      .subscribe({
        next: (resp: PageResponse<any>) => {
          this.loanRequests = resp.contents;
          this.totalPages = resp.totalPages;
        },
        error: (err) => console.error('Error fetching loan requests:', err),
      });
  }

  onApprove(loanId: number): void {
    this.loanOfficerService
      .approveLoan(loanId, this.officerId) // Pass two separate arguments
      .subscribe({
        next: (res) => {
          alert(`Loan #${res.loanId} Approved. Message: ${res.message}`);
          this.getLoanRequests();
        },
        error: (err) => console.error(err)
      });
  }

  onReject(loanId: number): void {
    const remark = prompt('Enter rejection remark:');
    if (!remark) return;
  
    this.loanOfficerService
      .rejectLoan(loanId, this.officerId, remark)  // Pass 3 separate arguments
      .subscribe({
        next: (res) => {
          alert(`Loan #${res.loanId} Rejected. Remark: ${res.message}`);
          this.getLoanRequests(); // refresh
        },
        error: (err) => console.error(err)
      });
  }
  
}
