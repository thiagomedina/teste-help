import { all, fork } from 'redux-saga/effects';
import topTracks from './topTracks';

export default function* rootSaga() {
  yield all([
    fork(topTracks)
  ])
}
