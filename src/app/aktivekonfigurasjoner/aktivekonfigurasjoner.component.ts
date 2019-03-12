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
  public vis_eksponeringid:boolean = true;
  public vis_e_host:boolean = true;
  public vis_e_port:boolean = true;
  public vis_e_uri:boolean = true;
  public vis_rp_uri:boolean = true;
  public vis_lb_host:boolean = true;
  public vis_lb_port:boolean = true;
  public vis_meldingsstr:boolean = true;
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
    this.displayedColumns = ['e_uri', 'rp_uri', 'lb_host', 'lb_port', 'meldingsstr'];
  }

  handleCheckbox():void{
    const ldisplayedColumns: string[] = [];
    if (this.vis_eksponeringid) ldisplayedColumns.push("eksponeringid");
    if (this.vis_e_host)ldisplayedColumns.push("e_host");
    if (this.vis_e_port)ldisplayedColumns.push("e_port");
    if (this.vis_e_uri)ldisplayedColumns.push("e_uri");
    if (this.vis_rp_uri)ldisplayedColumns.push("rp_uri");
    if (this.vis_lb_host)ldisplayedColumns.push("lb_host");
    if (this.vis_lb_port)ldisplayedColumns.push("lb_port");
    if (this.vis_meldingsstr)ldisplayedColumns.push("meldingsstr");
    this.displayedColumns = ldisplayedColumns;
    
  }

  iktlosningChanged(selectedValue: string) {
    this.dataSource = new MatTableDataSource(this._eksponeringer.filter((row) => {
      return row.iktlosning == selectedValue;
    }


    ))
  }

}
