import { Injectable } from '@angular/core';
import{HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanOfficerService {
  private API_BASE_URL = 'http://localhost:8080/loanapp';

  constructor(private http: HttpClient) {}

  // GET: /{officerId}/loanrequests
  viewLoanRequests(officerId: number, pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    return this.http.get<any>(`${this.API_BASE_URL}/${officerId}/loanrequests`, { params });
  }

  // POST: /approveloan
  approveLoan(loanId: number, officerId: number): Observable<any> {
    return this.http.post<any>(`${this.API_BASE_URL}/approveloan`, { loanId, officerId });
  }

  // POST: /rejectloan
  rejectLoan(loanId: number, officerId: number, message: string): Observable<any> {
    return this.http.post<any>(`${this.API_BASE_URL}/rejectloan`, { loanId, officerId, message });
  }

  // POST: /replyenquiry
  replyToEnquiry(enquiryId: number, responseMsg: string): Observable<any> {
    return this.http.post<any>(`${this.API_BASE_URL}/replyenquiry`, {
      enquiryId,
      response: responseMsg
    });
  }

  // PUT: /{officerId}/profile
  updateProfile(officerId: number, payload: any): Observable<any> {
    return this.http.put<any>(`${this.API_BASE_URL}/${officerId}/profile`, payload);
  }
}