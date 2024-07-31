import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenerateBillRequest } from '../class/generate-bill-request';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-generate-bill',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './generate-bill.component.html',
  styleUrl: './generate-bill.component.scss'
})
export class GenerateBillComponent {
  generateBill : FormGroup;
  billDetails: any;
  submitted = false;
  request = new GenerateBillRequest;

  constructor(private billingService: BillingService){
    this.generateBill = new FormGroup({
      serviceRequestNo: new FormControl("",[Validators.required]),
      totalUnit: new FormControl("", [Validators.required])
    })
  }


  onSubmit(){
    this.request.serviceRequestNo = this.generateBill.value.serviceRequestNo;
    this.request.totalUnit = this.generateBill.value.totalUnit;

    this.billingService.generateBill(this.request).subscribe((billData) => {
      console.log(billData);
      this.billDetails = billData;
      this.submitted = true;
    })
  }
}
