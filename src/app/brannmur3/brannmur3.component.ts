import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrannmurApning } from '../models/brannmurapning';
import { MatCheckboxChange } from '@angular/material';
import { MessageService } from '../Services/message.service';

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
  
  
  brannmurApninger: BrannmurApning[] = [];
  editItemIndex: number = -1;
  visHjelp :boolean = false;
  visAlle: boolean = false;
  isDrift: boolean =false;
  constructor(private messageService: MessageService) { this.sjekkKolonner(this.visAlle, this.isDrift); }

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
      const hack  = Object.assign([], this.brannmurApninger);
      this.brannmurApninger = hack;
      this.editItemIndex = -1;
    }
  }

  onAvbryt(): void {
    this.nullstillForm();
    this.editItemIndex = -1;
  }

  oppdaterKolonner(e : MatCheckboxChange){
      this.sjekkKolonner(this.visAlle, this.isDrift);
  }

  sjekkKolonner(alle :boolean, isDrift: boolean){
    
    if (alle){
      if (isDrift){
        this.visteKolonner = this.visAlleKollonerDrift;
      }else{
        this.visteKolonner = this.visAlleKollonerVanlig;
      }
      
    }else{
      if (isDrift){
        this.visteKolonner = this.visEnkelKollonerDrift;
      }else{
        this.visteKolonner = this.visEnkelKollonerVanlig;
      }
    }
  }

  setValuesInForm(index: number) {
    this.brannmurForm.patchValue({
      operasjon: this.brannmurApninger[index].operasjon,
      frahost: this.brannmurApninger[index].fraHost,
      fraport: this.brannmurApninger[index].fraPort,
      tilhost: this.brannmurApninger[index].tilHost,
      tilport: this.brannmurApninger[index].tilPort,
      beskrivelse: this.brannmurApninger[index].beskrivelse,
      transportprotokoll: this.brannmurApninger[index].transportProtokoll,
      merknader: this.brannmurApninger[index].merknader
    }
    );
  }

  nullstillForm(): void {
    this.brannmurForm.reset();
    this.brannmurForm.patchValue({
      operasjon: "apne"
    });
  }

  onEndre(index: number): void {
    this.setValuesInForm(index);
    this.editItemIndex = index;
  }

  onSlett(index: number): void {
    this.brannmurApninger.splice(index, 1);
    const hack  = Object.assign([], this.brannmurApninger);
    this.brannmurApninger = hack;
    this.nullstillForm();
    this.messageService.sendMessage(this.brannmurApninger.length.toString());
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
    this.nullstillForm();
    this.messageService.sendMessage(this.brannmurApninger.length.toString());
  }
  
}
