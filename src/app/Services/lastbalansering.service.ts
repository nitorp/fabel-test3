import { Injectable } from '@angular/core';
import { Lastbalansering } from '../models/lastbalansering.model';
import { Appserver } from '../models/appserver.model';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastbalanseringService {
  private _lastbalanseringer: Lastbalansering[] = [];
  constructor() {
    const lb: Lastbalansering = new Lastbalansering();
    lb.host = 'gisline.utv.vegvesen.no';
    lb.port = '8138';
    lb.protokoll = "HTTP";
    lb.persisteringsmetode = "Ingen";
    
    const app = new Appserver();
    app.driftslokasjon = "Oslo";
    app.hostnavn = "svvusn3gisline1";
    app.port = '8138';
    app.helsesjekktest = "HTTP GET";
    app.helsesjekkbetingelse = "HTTP 200 OK";
    app.rutingbetingelse = "www";

    const app2 = new Appserver();
    app.driftslokasjon = "Oslo";
    app.hostnavn = "svvusn3gisline2";
    app.port = '8138';
    app.helsesjekktest = "HTTP GET";
    app.helsesjekkbetingelse = "HTTP 200 OK";
    app.rutingbetingelse = "www";
    lb.appservers = [];
    lb.appservers.push(app);
    lb.appservers.push(app2);
    this._lastbalanseringer.push(lb);

    const lb2: Lastbalansering = new Lastbalansering();
    lb2.host = 'gisline.utv.vegvesen.no';
    lb2.port = '8080';
    lb2.protokoll = "TCP";
    lb2.persisteringsmetode = "Ingen";

    const app3 = new Appserver();
    app3.driftslokasjon = "Oslo";
    app3.hostnavn = "svvusn3gisline1";
    app3.port = '8080';
    app3.helsesjekktest = "TCP";
    app3.helsesjekkbetingelse = "TCP enkleste mulige helsesjekk";
    app3.rutingbetingelse = "pm1";

    const app4 = new Appserver();
    app4.driftslokasjon = "Oslo";
    app4.hostnavn = "svvusn3gisline2";
    app4.port = '8080';
    app4.helsesjekktest = "TCP";
    app4.helsesjekkbetingelse = "TCP enkleste mulige helsesjekk";
    app4.rutingbetingelse = "pm1";
    lb2.appservers = [];
    lb2.appservers.push(app3);
    lb2.appservers.push(app4);
    this._lastbalanseringer.push(lb2);
   }

  GetLastbalanseringer(): Observable<Lastbalansering[]> {
    return of(this._lastbalanseringer);
  }
}
