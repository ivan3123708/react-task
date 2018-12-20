import axios from 'axios';

export const api = {
  getHotel() {
    return axios.get('https://api.review.network/hotels/100')
      .then((res) => res.data.data)
      .then((res) => ({
        type: 'GET_HOTEL',
        hotel: res
      }));
  },
  getReviews() {
    return axios.get('https://api.review.network/entities/100/reviews')
      .then((res) => res.data.data)
      .then((res) => ({
        type: 'GET_REVIEWS',
        reviews: res
      }));
  }
}