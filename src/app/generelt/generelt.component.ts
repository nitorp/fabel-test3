import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-generelt',
  templateUrl: './generelt.component.html',
  styleUrls: ['./generelt.component.css']
})
export class GenereltComponent implements OnInit {
  genereltForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.genereltForm = new FormGroup({
      iktlosning: new FormControl(),
      pobref: new FormControl(),
      kontakt: new FormControl(),
      miljo: new FormControl(),
      sikkerhetsniva: new FormControl(),
      beskrivelse: new FormControl()
    });

  }

}
