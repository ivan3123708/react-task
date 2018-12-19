import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import hotelReducer from '../reducers/hotelReducer';
import reviewsReducer from '../reducers/reviewsReducer';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  hotel: hotelReducer,
  reviews: reviewsReducer
});

export interface StoreState {
  hotel?: any,
  reviews?: any[]
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;