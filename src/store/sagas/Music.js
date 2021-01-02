import { call, takeLatest, all, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Types } from '../ducks/Music';

function* getTopTracks(action) {
  let response = {};
  try {
    response = yield call(api.get, 'chart/0');
    yield put({ type: Types.GET_TOP_TRACKS_SUCCESS, payload: response.data });
  } catch (e) {
    console.log(e);
    yield put({ type: Types.GET_TOP_TRACKS_SUCCESS, errorMessage: 'error' });
  }
}

export default function* () {
  yield all([takeLatest(Types.GET_TOP_TRACKS, getTopTracks)]);
}
