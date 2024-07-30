import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';

export const routes: Routes = [
    {'path' : '', component:HomeComponent},
    {'path' : 'pay-bill', component:PayBillComponent},
    {'path' : 'view-bill', component:ViewBillComponent},
    {'path' : 'generate-bill', component:GenerateBillComponent}
];
