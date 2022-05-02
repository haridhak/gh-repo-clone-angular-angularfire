import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationsService {
  destinations = [
    {
      name: 'camp noel',
      summary: 'Fortified capital of the kingdom of Gondor',
      description:
        'Location: Set in the mountainous Western Ghats region, this relaxed rural resort on a former royal orchard is 8 km from the Top Station view point, the highest point in Munnar ',

      price: 4800,
      isFavorite: false,
    },
    {
      name: 'The Oberoi Udaivilas, Udaipur',
      summary: 'Realm and base of operations of Sauron',
      description:
        'Historic Pichola spreads around scenic Lake Pichola, known for its lakeside ghats and palaces converted into hotels, and popular for boat rides. Jagmandir is a palace hotel on an island with domes and stone elephants. The extravagant waterside City Palace ',
      price: 5000,
      isFavorite: false,
    },
  ];
}
