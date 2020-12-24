export class SymbolInfo {

  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;

  constructor(resp: any) {
    this.symbol = resp['1. symbol'];
    this.name = resp['2. name'];
    this.type = resp['3. type'];
    this.region = resp['4. region'];
    this.marketOpen = resp['5. marketOpen'];
    this.marketClose = resp['6. marketClose'];
    this.timezone = resp['7. timezone'];
    this.currency = resp['8. currency'];
    this.matchScore = resp['9. matchScore'];
  }
}

// 1. symbol: "AP"
// 2. name: "Ampco-Pittsburgh Corporation"
// 3. type: "Equity"
// 4. region: "United States"
// 5. marketOpen: "09:30"
// 6. marketClose: "16:00"
// 7. timezone: "UTC-05"
// 8. currency: "USD"
// 9. matchScore: "1.0000"
