import { Bestilling } from './../models/bestilling.model';
import { Component, OnInit,  } from '@angular/core';
import { BestillingService } from '../Services/bestilling.service';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-minebestillinger',
  templateUrl: './minebestillinger.component.html',
  styleUrls: ['./minebestillinger.component.css']
})

export class MinebestillingerComponent implements OnInit {
  _bestillinger: Bestilling[];
  public displayedColumns: string[] = ['link', 'opprettetDato', 'iktlosning', 'beskrivelse', 'pobref', 'kontaktperson', 'miljo', 'sikkerhetsniva', 'status'];
  public dataSource: MatTableDataSource<Bestilling>;
  constructor(private _bestillingserviceService: BestillingService) { }

  ngOnInit() {
    this._bestillingserviceService.getBestillinger('Nils Johan Torp').subscribe((dta) => {
      this._bestillinger = dta;
      this.dataSource = new MatTableDataSource(this._bestillinger);
    }
    );
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }   
}
