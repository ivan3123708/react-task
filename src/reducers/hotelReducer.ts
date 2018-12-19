import { StoreState } from '../store/configureStore';
import { Action } from '../actions';

const initialState: StoreState = {
  hotel: null
};

const hotelReducer = (state: StoreState = initialState, action: Action): StoreState => {
  switch (action.type) {
    case 'GET_HOTEL':
      return {
        ...state,
        hotel: action.hotel
      }
    default:
      return state;
  }
}

export default hotelReducer;