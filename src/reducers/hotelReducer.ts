import { StoreState } from '../store/configureStore';
import { Action } from '../actions/hotelActions';

const initialState: StoreState = {
  hotel: {}
}

const hotelReducer = (state: StoreState = initialState, action: Action): StoreState => {
  switch (action.type) {
    case 'GET_HOTEL':
      return {
        ...state,
        hotel: action.hotel.data
      }
    default:
      return state;
  }
}

export default hotelReducer;