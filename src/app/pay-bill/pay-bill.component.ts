import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-pay-bill',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pay-bill.component.html',
  styleUrl: './pay-bill.component.scss'
})
export class PayBillComponent {
  payBill: FormGroup;
  serviceRequestNo: any;
  billDetails: any;
  submitted = false;

  constructor(private billingService: BillingService){
   this.payBill = new FormGroup({
      serviceRequestNo: new FormControl("",[Validators.required])
    })
  }

  onSubmit() {
    const isFormValid = this.payBill.valid;
    console.log(isFormValid);
    console.log(this.payBill.value.serviceRequestNo);

    this.billingService.getBillDetailsByServiceRequestNo(this.payBill.value.serviceRequestNo).subscribe((billData) => {

      console.log(billData);
      this.billDetails = billData;
      this.submitted = true;
    })
  }

  doPayment(id : number, amount: any) {
    console.log(id);

    this.billingService.doBillPayment(id,amount).subscribe((paymentRes) => {
      console.log(paymentRes);
      this.submitted = true;
    })
  }
}
