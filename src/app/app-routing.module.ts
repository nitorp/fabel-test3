import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinebestillingerComponent} from './minebestillinger/minebestillinger.component';
import { AktivekonfigurasjonerComponent} from './aktivekonfigurasjoner/aktivekonfigurasjoner.component';
import { BestillingComponent } from './bestilling/bestilling.component';
import { FinnerikkesidenComponent } from './finnerikkesiden/finnerikkesiden.component';

const routes: Routes = [
  { path: 'minebestillinger', component: MinebestillingerComponent },
  { path: 'bestilling/:id', component: BestillingComponent },
  { path: 'aktivekonfigurasjoner', component: AktivekonfigurasjonerComponent },
  { path: '', redirectTo: '/minebestillinger', pathMatch: 'full' },
  { path: '**', component: FinnerikkesidenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
