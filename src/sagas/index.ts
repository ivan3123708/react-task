import { call, put, all, fork } from 'redux-saga/effects';
import { api } from '../services';
import { actions } from '../actions';

function* getHotel() {
  const hotel = yield call(api.getHotel);

  yield put(actions.getHotel(hotel));
};

function* getReviews() {
  const reviews = yield call(api.getReviews);

  yield put(actions.getReviews(reviews));
};

export default function* rootSaga() {
  yield all([fork(getHotel), fork(getReviews)]);
};