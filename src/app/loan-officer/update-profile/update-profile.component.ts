import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoanOfficerService } from 'src/app/services/loan-officer.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})

export class UpdateProfileComponent implements OnInit {
  profileForm!: FormGroup;
  officerId = 123;  // Example

  constructor(
    private fb: FormBuilder,
    private loanOfficerService: LoanOfficerService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      // Use the same variable names as your backend expects:
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],                // or date picker
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pancardNumber: ['', [Validators.required, Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
      gender: ['', Validators.required]
    });
  }

  onUpdate(): void {
    if (this.profileForm.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    // Pass the form values directly to the service
    this.loanOfficerService.updateProfile(this.officerId, this.profileForm.value)
      .subscribe({
        next: (res) => {
          alert('Profile updated successfully!');
          console.log('Updated Profile:', res);
        },
        error: (err) => {
          console.error(err);
          alert('Error updating profile');
        }
      });
  }
}
