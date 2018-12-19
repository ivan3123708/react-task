const GET_HOTEL = 'GET_HOTEL';
type GET_HOTEL = typeof GET_HOTEL;

const GET_REVIEWS = 'GET_REVIEWS';
type GET_REVIEWS = typeof GET_REVIEWS;

export interface IGetHotel {
  type: GET_HOTEL;
  hotel: any;
};

export interface IGetReviews {
  type: GET_REVIEWS;
  reviews: any;
};

export const actions = {
  getHotel(hotel): IGetHotel {
    return {
      type: GET_HOTEL,
      hotel
    }
  },
  getReviews(reviews): IGetReviews {
    return {
      type: GET_REVIEWS,
      reviews
    }
  }
};

export type Action = IGetHotel | IGetReviews;