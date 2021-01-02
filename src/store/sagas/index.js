import { all, fork } from 'redux-saga/effects';
import Music from './Music';

export default function* rootSaga() {
  yield all([
    fork(Music)
  ])
}
