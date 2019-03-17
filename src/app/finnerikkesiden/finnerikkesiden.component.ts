import { Component, OnInit } from '@angular/core';
import { Observer, Observable, of } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-finnerikkesiden',
  templateUrl: './finnerikkesiden.component.html',
  styleUrls: ['./finnerikkesiden.component.css']
})
export class FinnerikkesidenComponent implements OnInit {
  items = ["dsfd", "fdsa", "fasd"];
  
  constructor() { }

  ngOnInit() {
  }

  onLeggtil(): void {
    this.items = this.items.concat("dsfsd");
    console.log(this.items);
  }
}
