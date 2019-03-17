import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MessageService } from '../Services/message.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { BrannmurApning } from '../models/brannmurapning';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-brannmur2',
  templateUrl: './brannmur2.component.html',
  styleUrls: ['./brannmur2.component.css']
})
export class Brannmur2Component implements OnInit {
  items = ["dsfd", "fdsa", "fasd"];
  role: string = "drif";
  visHjelp :boolean = false;
  visAlle: boolean = false;
  editItemIndex: number = -1;
  brannmurForm: FormGroup;
  brannmurApninger: BrannmurApning[] = [];
  
  constructor() { 
    
  }

  mapValuesFromForm() {
    const bra: BrannmurApning = new BrannmurApning();
    bra.operasjon = this.brannmurForm.value.operasjon;
    bra.fraHost = this.brannmurForm.value.frahost;
    bra.fraPort = this.brannmurForm.value.fraport;
    bra.tilHost = this.brannmurForm.value.tilhost;
    bra.tilPort = this.brannmurForm.value.tilport;
    bra.beskrivelse = this.brannmurForm.value.beskrivelse;
    bra.merknader = this.brannmurForm.value.merknader;
    bra.transportProtokoll = this.brannmurForm.value.transportprotokoll;
    if (this.editItemIndex === -1) {
      this.brannmurApninger = this.brannmurApninger.concat(bra);
    } else {
      this.brannmurApninger.splice(this.editItemIndex, 1, bra);
    }
  }
  nullstillForm(): void {
    this.brannmurForm.reset();
    this.brannmurForm.patchValue({
      operasjon: "apne"
    });
  }

  onLeggtil(): void {
    this.mapValuesFromForm();
    this.nullstillForm();
    console.log(this.brannmurApninger);
   
  }

  ngOnInit() {
    this.brannmurForm = new FormGroup({
      operasjon: new FormControl("apne"),
      frahost: new FormControl(),
      fraport: new FormControl(),
      tilhost: new FormControl(),
      tilport: new FormControl(),
      beskrivelse: new FormControl(),
      transportprotokoll: new FormControl(),
      merknader: new FormControl()
    });    
  }

}
