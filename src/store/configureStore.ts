import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import hotelReducer from '../reducers/hotelReducer';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  hotel: any
};

const store = createStore(hotelReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;