import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import hotelReducer from '../reducers/hotelReducer';
import reviewsReducer from '../reducers/reviewsReducer';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  hotel: hotelReducer,
  reviews: reviewsReducer
});

export interface StoreState {
  hotel?: any,
  reviews?: any
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;