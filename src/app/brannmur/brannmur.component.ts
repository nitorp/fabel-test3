import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MessageService } from '../Services/message.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { BrannmurApning } from '../models/brannmurapning'
@Component({
  selector: 'app-brannmur',
  templateUrl: './brannmur.component.html',
  styleUrls: ['./brannmur.component.css']
})

export class BrannmurComponent implements OnInit, OnDestroy {
  brannmurForm: FormGroup;
  formVisible: boolean;
  editItemIndex: number = -1;
  brannmurApninger: BrannmurApning[] = [];
  private _role: string;
  messages: any[] = [];
  subscription: Subscription;
  isReadonly = false;
  @Input()
  set role(val: string) {
    this._role = val;
  }
  get role(): string {
    return this._role;
  }

  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this._role = message.text;

        this.isReadonly = (this.role === "les");
        console.log(this.isReadonly);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }


  onLagre(): void {
    this.mapValuesFromForm();
    this.nullstillForm();
    this.formVisible = false;
  }

  nullstillForm(): void {
    this.brannmurForm.reset();
    this.brannmurForm.patchValue({
      operasjon: "apne"
    });
  }

  onAvbryt(): void {
    this.nullstillForm();
    this.formVisible = false;
  }

  brannmurClick(index: number) {
    this.formVisible = true;
    this.setValuesInForm(index);
    this.editItemIndex = index;
    console.log(index);
  }

  leggTil(): void {
    this.editItemIndex = -1;
    console.log(this.formVisible);
    this.formVisible = true;
  }

  slett(index: number): void {
    this.brannmurApninger.splice(index, 1);
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
      this.brannmurApninger.push(bra);
    }else{
      this.brannmurApninger.splice(this.editItemIndex,1,bra);
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

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
