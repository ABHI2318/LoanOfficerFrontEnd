import { Component, OnInit } from '@angular/core';
import { LoanOfficerService } from 'src/app/services/loan-officer.service';

@Component({
  selector: 'app-pending-loan-requests',
  templateUrl: './pending-loan-requests.component.html',
  styleUrls: ['./pending-loan-requests.component.css']
})

export class PendingLoanRequestsComponent implements OnInit {
  pendingLoans: any[] = [];
  officerId = 123;  // Example

  constructor(private loanOfficerService: LoanOfficerService) {}

  ngOnInit(): void {
    this.loanOfficerService.viewLoanRequests(this.officerId, 0, 100).subscribe({
      next: (res) => {
        // filter only PENDING
        this.pendingLoans = res.contents.filter((loan: any) => loan.loanstatus === 'PENDING');
      },
      error: (err) => console.error(err)
    });
  }

  onApprove(loanId: number): void {
    this.loanOfficerService.approveLoan(loanId, this.officerId).subscribe({
      next: (res) => {
        alert(`Loan #${res.loanId} Approved. Message: ${res.message}`);
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  onReject(loanId: number): void {
    const remark = prompt('Enter rejection remark:');
    if (!remark) return;

    this.loanOfficerService.rejectLoan(loanId, this.officerId, remark).subscribe({
      next: (res) => {
        alert(`Loan #${res.loanId} Rejected. Remark: ${res.message}`);
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  private refresh(): void {
    this.ngOnInit();
  }
}