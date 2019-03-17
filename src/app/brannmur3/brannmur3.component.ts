import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrannmurApning } from '../models/brannmurapning';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-brannmur3',
  templateUrl: './brannmur3.component.html',
  styleUrls: ['./brannmur3.component.css']
})
export class Brannmur3Component implements OnInit {
  brannmurForm: FormGroup;
  visteKolonner = [];
  visAlleKollonerVanlig = ['coloperasjon', 'colfrahost', 'coltilhost', 'coltilport', 'colbeskrivelse', 'coltransportprotokoll','colknapper'];
  visAlleKollonerDrift = ['coloperasjon', 'colfrahost', 'colfraport', 'coltilhost', 'coltilport', 'colbeskrivelse', 'coltransportprotokoll', 'colmerknader','colknapper'];
  visEnkelKollonerVanlig = ['coloperasjon', 'colfrahost', 'coltilhost', 'coltilport','colknapper'];
  visEnkelKollonerDrift = ['coloperasjon', 'colfrahost', 'colfraport', 'coltilhost', 'coltilport', 'colmerknader','colknapper'];
  
  rolle: string = "drift";
  brannmurApninger: BrannmurApning[] = [];
  editItemIndex: number = -1;
  visHjelp :boolean = false;
  visAlle: boolean = false;
  constructor() { this.sjekkKolonner(true); }

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

  oppdaterKolonner(e : MatCheckboxChange){
      this.sjekkKolonner(e.checked);
  }

  sjekkKolonner(alle :boolean){
    if (alle){
      if (this.rolle === "drift"){
        this.visteKolonner = this.visAlleKollonerDrift;
      }else{
        this.visteKolonner = this.visAlleKollonerVanlig;
      }
      
    }else{
      if (this.rolle === "drift"){
        this.visteKolonner = this.visEnkelKollonerDrift;
      }else{
        this.visteKolonner = this.visEnkelKollonerVanlig;
      }
    }
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
  onLeggtil(): void {
    this.mapValuesFromForm()
    console.log(this.brannmurApninger);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];