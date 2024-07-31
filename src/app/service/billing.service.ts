import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { GenerateBillRequest } from '../class/generate-bill-request';

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

  generateBill(billRequest: GenerateBillRequest): Observable<any>{
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(billRequest);

    console.log(body);

    return this.http.post(this.generateBillUrl, body, {'headers': headers, responseType: 'text'}).pipe(
      catchError((error) => {
        console.error('An error occurred: ', error);
        throw error;
      })
    )
  }

  doBillPayment(id: any, amount:any): Observable<any> {
    console.log(id);
    return this.http.put(this.billPayment + "?id=" + id + "&amount=" + amount, "", {responseType: 'text'} ).pipe(
      catchError((error) => {
        console.error('An error occuered: ', error);
        throw error;
      })
    )
  }
}
