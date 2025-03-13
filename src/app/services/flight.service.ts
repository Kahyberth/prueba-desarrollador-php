import { Injectable } from '@angular/core';
import { FlightQuotesResponse } from '../models/flight_quotes.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {


  flightData: FlightQuotesResponse;

  constructor() {
    this.flightData = {
      "status": true,
      "message": "Successful",
      "data": {
        "flightQuotes": {
          "buckets": [
            {
              "id": "CHEAPEST_FLIGHT_QUOTES",
              "label": "Cheapest flights",
              "resultIds": [
                "fq1",
                "fq2"
              ]
            }
          ],
          "results": [
            {
              "id": "fq1",
              "type": "FLIGHT_QUOTE",
              "content": {
                "price": "$417",
                "rawPrice": 417.0,
                "direct": false,
                "outboundLeg": {
                  "originAirport": {
                    "id": "A1",
                    "skyCode": "BOG",
                    "name": "El Dorado International Airport",
                    "type": "Airport"
                  },
                  "destinationAirport": {
                    "id": "A2",
                    "skyCode": "CPH",
                    "name": "Copenhagen Airport",
                    "type": "Airport"
                  },
                  "localDepartureDate": "2025-04-06",
                  "localDepartureDateLabel": "Sun, Apr 6"
                }
              },
              "entityId": "entity1",
              "skyId": "CPH"
            },
            {
              "id": "fq2",
              "type": "FLIGHT_QUOTE",
              "content": {
                "price": "$453",
                "rawPrice": 453.0,
                "direct": false,
                "outboundLeg": {
                  "originAirport": {
                    "id": "A1",
                    "skyCode": "BOG",
                    "name": "El Dorado International Airport",
                    "type": "Airport"
                  },
                  "destinationAirport": {
                    "id": "A2",
                    "skyCode": "CPH",
                    "name": "Copenhagen Airport",
                    "type": "Airport"
                  },
                  "localDepartureDate": "2025-04-01",
                  "localDepartureDateLabel": "Tue, Apr 1"
                }
              },
              "entityId": "entity2",
              "skyId": "CPH"
            }
          ],
          "months": [
            {
              "year": 2025,
              "month": 4,
              "monthLabel": "Apr",
              "selected": true
            },
            {
              "year": 2025,
              "month": 5,
              "monthLabel": "May",
              "selected": false
            }
          ],
          "context": {
            "status": "complete",
            "sessionId": "session123",
            "totalResults": 2
          }
        },
        "differentDestination": {
          "location": {
            "id": "L1",
            "skyCode": "DK",
            "name": "Denmark",
            "type": "Nation"
          },
          "context": {
            "status": "complete",
            "sessionId": "session123",
            "totalResults": 0
          }
        },
        "context": {
          "status": "complete",
          "sessionId": "session123",
          "totalResults": 2
        }
      }
    }
   }
}
