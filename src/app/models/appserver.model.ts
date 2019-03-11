export class Appserver
{
    constructor
    (
        public platform?: string,
        public hostnavn?: string,
        public port?: string,
        public protokoll?: string,
        public driftslokasjon?: string, // Protokoll for kommunikasjon mellom lastbalanserer og appservere. Som oftest HTTP eller TCP. Headere i angitt protokoll må være lesbare for lastbalansereren.
        public sticky?:boolean ,
        public rutingbetingelse?: string,
        public helsesjekktest?: string,
        public helsesjekkbetingelse?: string,
        public versjon?: string
    )
    {}

}