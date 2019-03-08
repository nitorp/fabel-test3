import { Component, OnInit } from '@angular/core';
import { BestillingService } from '../Services/bestilling.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bestilling',
  templateUrl: './bestilling.component.html',
  styleUrls: ['./bestilling.component.css']
})
export class BestillingComponent implements OnInit {
  profileForm: FormGroup;
  
  constructor(private _bestillingserviceService: BestillingService, private fb: FormBuilder) {


  }

  ngOnInit() {
    this.profileForm = this.fb.group({
    firstName: [''],
    lastName: ['']
    });
  }

}
