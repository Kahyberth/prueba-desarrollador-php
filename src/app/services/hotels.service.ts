import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {


  hotels: any[];

  constructor() {
    this.hotels = [
      {
        "listing": {
          "name": "\"WabiSabi\" house Room1/1 bed/Skytree view/Asakusa/",
          "label": "Manhattan, New York, New York State, United States",
          "avgRatingLocalized": "4.95 (155)",
          "contextualPictures": [
            {
              "picture": "https://a0.muscache.com/im/pictures/491b9e72-adf2-4f53-b344-76e2cb57de84.jpg?im_w=720"
            },
            {
              "picture": "https://a0.muscache.com/im/pictures/hosting/Hosting-37979200/original/352ffada-08a1-403e-8577-f1db5e77058a.jpeg?im_w=720"
            }
          ]
        },
        "pricingQuote": {
          "structuredStayDisplayPrice": {
            "primaryLine": {
              "price": "$75"
            },
            "secondaryLine": {
              "price": "$374 total"
            }
          }
        }
      },
      {
        "listing": {
          "name": "Boutique hotel in Shinjuku City",
          "label": "Shinjuku City, Japan",
          "avgRatingLocalized": "4.79 (146)",
          "contextualPictures": [
            {
              "picture": "https://a0.muscache.com/im/pictures/miso/Hosting-43704082/original/9609b7bb-ee23-494f-ab3b-5db58dfacf7c.jpeg?im_w=720"
            }
          ]
        },
        "pricingQuote": {
          "structuredStayDisplayPrice": {
            "primaryLine": {
              "price": "$61"
            },
            "secondaryLine": {
              "price": "$304 total"
            }
          }
        }
      }
    ]


  }
}
