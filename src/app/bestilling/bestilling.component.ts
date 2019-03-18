import { Component, OnInit } from '@angular/core';
import { BestillingService } from '../Services/bestilling.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../Services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bestilling',
  templateUrl: './bestilling.component.html',
  styleUrls: ['./bestilling.component.css']
})
export class BestillingComponent implements OnInit {
  subscription: Subscription;
  brannmurlabel : string = "Brannmursåpninger(0)";
  constructor(private _bestillingserviceService: BestillingService,private messageService: MessageService)  {
    this.subscription = this.messageService.getMessage().subscribe(message => {
    this.brannmurlabel = "Brannmursåpninger(" + message.text +")"
    });
  }

  ngOnInit() {
  
  }
  
}
