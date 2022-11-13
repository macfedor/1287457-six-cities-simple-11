import {OfferType} from '../types/offers';

export const offers: OfferType[] = [
  {
    id: 1,
    isPremium: true,
    mainImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      name: 'Angelina',
      status: 'Pro',
      avatar: 'img/avatar-angelina.jpg',
    },
    description: `<p class="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p class="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                  `,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    coords: {
      lat: 52.3909553943508,
      lon: 4.85309666406198,
    },
    city: 'Amsterdam',
  },
  {
    id: 2,
    isPremium: false,
    mainImage: 'img/room.jpg',
    price: 20,
    rating: 2,
    name: 'Wood and stone place',
    type: 'Private Room',
    bedrooms: 1,
    maxAdults: 1,
    inside: ['Wi-Fi'],
    host: {
      name: 'Angelina',
      status: '',
      avatar: 'img/avatar-angelina.jpg',
    },
    description: `<p class="property__text">
                    Some text
                  </p>
                  `,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    coords: {
      lat: 52.3609553943508,
      lon: 4.85309666406198,
    },
    city: 'Amsterdam',
  },
  {
    id: 3,
    isPremium: true,
    mainImage: 'img/apartment-02.jpg',
    price: 100,
    rating: 5,
    name: 'Number 3',
    type: 'Apartment',
    bedrooms: 33,
    maxAdults: 44,
    inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating'],
    host: {
      name: 'Max',
      status: 'Pro',
      avatar: 'img/avatar-max.jpg',
    },
    description: `<p class="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  `,
    images: ['img/room.jpg'],
    coords: {
      lat: 52.3909553943508,
      lon: 4.929309666406198,
    },
    city: 'Amsterdam',
  },
  {
    id: 4,
    isPremium: true,
    mainImage: 'img/apartment-03.jpg',
    price: 1200,
    rating: 4,
    name: 'Four',
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      name: 'Angelina',
      status: 'Pro',
      avatar: 'img/avatar-angelina.jpg',
    },
    description: `<p class="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p class="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                  `,
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    coords: {
      lat: 52.3809553943508,
      lon: 4.939309666406198,
    },
    city: 'Amsterdam',
  },
  {
    id: 5,
    isPremium: true,
    mainImage: 'img/apartment-03.jpg',
    price: 1200,
    rating: 4,
    name: 'Four',
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      name: 'Angelina',
      status: 'Pro',
      avatar: 'img/avatar-angelina.jpg',
    },
    description: `<p class="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p class="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                  `,
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    coords: {
      lat: 48.8534,
      lon: 2.3488,
    },
    city: 'Paris',
  },
  {
    id: 3,
    isPremium: true,
    mainImage: 'img/apartment-02.jpg',
    price: 100,
    rating: 5,
    name: 'Number 3',
    type: 'Apartment',
    bedrooms: 33,
    maxAdults: 44,
    inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating'],
    host: {
      name: 'Max',
      status: 'Pro',
      avatar: 'img/avatar-max.jpg',
    },
    description: `<p class="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  `,
    images: ['img/room.jpg'],
    coords: {
      lat: 48.8634,
      lon: 2.3288,
    },
    city: 'Paris',
  },
];
