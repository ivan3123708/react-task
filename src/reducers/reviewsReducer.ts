import { StoreState } from '../store/configureStore';
import { Action } from '../actions/types';

const initialState: StoreState = {
  reviews: []
}

const reviewsReducer = (state: StoreState = initialState, action: Action): StoreState => {
  switch (action.type) {
    case 'GET_REVIEWS':
      return {
        ...state,
        reviews: action.reviews
      }
    default:
      return state;
  }
}

export default reviewsReducer;