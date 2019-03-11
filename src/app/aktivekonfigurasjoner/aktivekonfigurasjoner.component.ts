import { Eksponering } from './../models/eksponering.model';
import { Lastbalansering } from './../models/lastbalansering.model';
import { Appserver } from './../models/appserver.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatButtonModule } from '@angular/material';
import { GrunndataService } from '../Services/grunndata.service';
import { EksponeringService } from '../Services/eksponering.service';
import { LastbalanseringService } from '../Services/lastbalansering.service';

@Component({
  selector: 'app-aktivekonfigurasjoner',
  templateUrl: './aktivekonfigurasjoner.component.html',
  styleUrls: ['./aktivekonfigurasjoner.component.css']
})
export class AktivekonfigurasjonerComponent implements OnInit {
  private _iktlosninger: string[];
  private _eksponeringer: Eksponering[];
  private _lastbalanseringer: Lastbalansering[];
  public displayedColumns: string[] = ['eksponeringid', 'e_host', 'e_port', 'e_uri', 'rp_uri', 'lb_host', 'lb_port', 'meldingsstr'];
  public dataSource: MatTableDataSource<Eksponering>;
  constructor(private _grunndataService: GrunndataService, private _eksponeringService: EksponeringService, private _lastbalanseringService: LastbalanseringService) {


  }

  ngOnInit() {

    this._grunndataService.GetIktLosninger().subscribe((dta) => {
      this._iktlosninger = dta;
    }
    );
    this._eksponeringService.GetExponeringer().subscribe((dta) => {
      this._eksponeringer = dta;

    }
    );
    this._lastbalanseringService.GetLastbalanseringer().subscribe((dta) => {
      this._lastbalanseringer = dta;

    }
    );
  }

  sjekkdata():void{
    console.log(this._lastbalanseringer);
  }

  iktlosningChanged(selectedValue: string) {
    this.dataSource = new MatTableDataSource(this._eksponeringer.filter((row) => {
      return row.iktlosning == selectedValue;
    }


    ))
  }

}
