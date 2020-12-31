import { call, takeLatest, all } from 'redux-saga/effects';
import api from '../../services/api';

import { Types } from '../ducks/topTracks';

function* getTopTracks(action) {
  let response = {};
  try {
    response = yield call(api.get, 'chart');

    console.log(response.data.tracks);
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield all([takeLatest(Types.GET_TOP_TRACKS, getTopTracks)]);
}
