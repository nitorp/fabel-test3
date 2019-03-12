import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {MatButtonModule, MatCheckboxModule, MatRadioModule, MatCardModule, MatIconModule, MatListModule,  MatSortModule, MatGridListModule, MatMenuModule, MatTreeModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MinebestillingerComponent } from './minebestillinger/minebestillinger.component';
import { AktivekonfigurasjonerComponent } from './aktivekonfigurasjoner/aktivekonfigurasjoner.component';
import { MatPaginatorModule } from '@angular/material';
import { browser } from 'protractor';
import { BestillingComponent } from './bestilling/bestilling.component';
import { FinnerikkesidenComponent } from './finnerikkesiden/finnerikkesiden.component';
import { BestillingService } from './Services/bestilling.service';
import { EksponeringService } from './Services/eksponering.service';
import { GrunndataService } from './Services/grunndata.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material' ;
import { MatSelectModule} from '@angular/material' 
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from "@angular/flex-layout";
import { GenereltComponent } from './generelt/generelt.component';
import { BrannmurComponent } from './brannmur/brannmur.component';
import { LastbalanseringComponent } from './lastbalansering/lastbalansering.component';
import { EksponeringComponent } from './eksponering/eksponering.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MinebestillingerComponent,
    AktivekonfigurasjonerComponent,
    BestillingComponent,
    FinnerikkesidenComponent,
    GenereltComponent,
    BrannmurComponent,
    LastbalanseringComponent,
    EksponeringComponent
  ],
  imports: [
    MatTooltipModule,
    MatMenuModule,
    FormsModule,
    MatRadioModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [BestillingService, EksponeringService, GrunndataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
