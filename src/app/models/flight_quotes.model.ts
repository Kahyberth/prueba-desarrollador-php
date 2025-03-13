export interface FlightQuotesResponse {
  status: boolean;
  message: string;
  data: FlightQuotesData;
}

export interface FlightQuotesData {
  flightQuotes: FlightQuotes;
  differentDestination: DifferentDestination;
  context: Context;
}

export interface FlightQuotes {
  buckets: Bucket[];
  results: FlightQuoteResult[];
  months: Month[];
  context: Context;
}

export interface Bucket {
  id: string;
  label: string;
  resultIds: string[];
}

export interface FlightQuoteResult {
  id: string;
  type: string;
  content: FlightQuoteContent;
  entityId: string;
  skyId: string;
}

export interface FlightQuoteContent {
  price: string;
  rawPrice: number;
  direct: boolean;
  outboundLeg: OutboundLeg;
}

export interface OutboundLeg {
  originAirport: Airport;
  destinationAirport: Airport;
  localDepartureDate: string;
  localDepartureDateLabel: string;
}

export interface Airport {
  id: string;
  skyCode: string;
  name: string;
  type: string;
}

export interface Month {
  year: number;
  month: number;
  monthLabel: string;
  selected: boolean;
}

export interface Context {
  status: string;
  sessionId: string;
  totalResults: number;
}

export interface DifferentDestination {
  location: Location;
  context: Context;
}

export interface Location {
  id: string;
  skyCode: string;
  name: string;
  type: string;
}
