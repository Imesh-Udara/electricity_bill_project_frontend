import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private apiUrl = 'http://localhost:8080/api/getBillDetails';
  private billPayment = 'http://localhost:8080/api/doPayment';
  private generateBillUrl = 'http://localhost:8080/api/generateBill';
  constructor(private http: HttpClient) { }
  getBillDetailsByServiceRequestNo(serviceRequestNo: any): Observable<any>{
    return this.http.get(this.apiUrl, {params: {serviceRequestNo: serviceRequestNo}}).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        throw error;
      })
    )
  }
}
