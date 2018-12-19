import axios from 'axios';
import { Dispatch } from 'redux';

export const api = {
  getHotel() {
    return axios.get('https://api.review.network/hotels/100')
      .then((res) => ({
        type: 'GET_HOTEL',
        hotel: res.data.data
      }));
  },
  getReviews() {
    return axios.get('https://api.review.network/entities/100/reviews')
      .then((res) => ({
        type: 'GET_REVIEWS',
        reviews: res.data.data
      }));
  }
}