import { Component } from '@angular/core';
import { LoanOfficerService } from 'src/app/services/loan-officer.service';

@Component({
  selector: 'app-reply-to-enquiry',
  templateUrl: './reply-to-enquiry.component.html',
  styleUrls: ['./reply-to-enquiry.component.css']
})
export class ReplyToEnquiryComponent {
  enquiryId!: number;
  replyMessage = '';

  constructor(private loanOfficerService: LoanOfficerService) {}

  onSubmit(): void {
    if (!this.enquiryId || !this.replyMessage.trim()) {
      alert('Please enter an Enquiry ID and a reply message.');
      return;
    }

    this.loanOfficerService.replyToEnquiry(this.enquiryId, this.replyMessage).subscribe({
      next: (res) => {
        alert(`Reply sent. Status: ${res.status}`);
      },
      error: (err) => console.error(err)
    });
  }
}