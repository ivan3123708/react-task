import { StoreState } from '../store/configureStore';
import { Action } from '../actions';

const initialState: StoreState = {
  reviews: null
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