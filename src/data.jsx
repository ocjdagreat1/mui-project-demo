import helicopterRide from "./assets/helicopterRide.jpg";
import boat from "./assets/boat.jpg";
import niagaraNight from "./assets/niagaraNight.jpg";
import citylight from "./assets/citylight.jpg";
import Helicopter from "./assets/Helicopter.jpg";
import nightlife from "./assets/nightlife.jpg";
import luxury from "./assets/luxury.jpg";
import immerse from "./assets/luxury.jpg";

const data = [
  {
    id: 1,
    name: "Niagara Falls",
    tours: [
      {
        id: 1,
        name: "Immerse into the Falls",
        duration: 8,
        rating: 3.5,
        numberOfReviews: 442,
        price: 4655,
        image:immerse,
      },
      {
        id: 2,
        name: "Helicopter over Falls",
        duration: 8,
        rating: 3.5,
        numberOfReviews: 641,
        price: 385,
        image: Helicopter,
      },
      {
        id: 3,
        name: "The Falls at Night",
        duration: 2,
        rating: 4.5,
        numberOfReviews: 133,
        price: 144,
        image: niagaraNight,
      },
      {
        id: 4,
        name: "Boat Cruise Experience",
        duration: 5,
        rating: 4.5,
        numberOfReviews: 462,
        price: 365,
        image: boat,
      },
    ],
  },
  {
    id: 2,
    name: "Las Vegas",
    tours: [
      {
        id: 1,
        name: "City Lights Tour",
        duration: 8,
        rating: 3.5,
        numberOfReviews: 442,
        price: 4655,
        image: citylight,
      },
      {
        id: 2,
        name: "Helicopter Ride Over Strip",
        duration: 8,
        rating: 3.5,
        numberOfReviews: 641,
        price: 385,
        image: helicopterRide,
      },
      {
        id: 3,
        name: "Night Life Experience",
        duration: 2,
        rating: 4.5,
        numberOfReviews: 133,
        price: 144,
        image: nightlife,
      },
      {
        id: 4,
        name: "Luxury Hotel Tour",
        duration: 5,
        rating: 4.5,
        numberOfReviews: 462,
        price: 365,
        image:luxury,
      },
    ],
  },
];

export default data;
