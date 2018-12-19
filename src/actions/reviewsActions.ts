import axios from 'axios';
import { Dispatch } from 'redux';

export interface GetReviews {
  type: 'GET_REVIEWS',
  reviews: any
};

export const getReviews = () => (dispatch: Dispatch) => {
  return axios.get('https://api.review.network/entities/100/reviews')
    .then((res) => dispatch({
      type: 'GET_REVIEWS',
      reviews: res.data.data
    }));
};