import { Component, OnInit } from '@angular/core';
import { BestillingService } from '../Services/bestilling.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../Services/message.service';
@Component({
  selector: 'app-bestilling',
  templateUrl: './bestilling.component.html',
  styleUrls: ['./bestilling.component.css']
})
export class BestillingComponent implements OnInit {
  _role = "drift";
  
  constructor(private _bestillingserviceService: BestillingService,private messageService: MessageService)  {


  }

  ngOnInit() {
  
  }
  radioChange() {
    this.messageService.sendMessage(this._role);
  }
}
