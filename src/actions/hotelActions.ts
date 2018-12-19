import axios from 'axios';
import { Dispatch } from 'redux';

interface GetHotel {
  type: 'GET_HOTEL';
  hotel: any;
};

export const getHotel = () => (dispatch: Dispatch) => {
  return axios.get('https://api.review.network/hotels/100')
    .then((res) => dispatch({
      type: 'GET_HOTEL',
      hotel: res.data
    }));
}

export type Action = GetHotel;