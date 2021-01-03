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

function* search(action) {
  let response = {};

  try {
    const artist = yield call(
      api.get,
      `/search/artist?q=${action.payload.query}&limit=3`,
    );

    const album = yield call(
      api.get,
      `/search/album?q=${action.payload.query}&limit=3`,
    );

    const track = yield call(
      api.get,
      `/search/track?q=${action.payload.query}&limit=3`,
    );

    response = {
      artist: artist.data.data,
      album: album.data.data,
      track: track.data.data,
    };
    
    yield put({ type: Types.SEARCH_SUCCESS, payload: response });
  } catch (e) {
    console.log(e);
    yield put({ type: Types.SEARCH_FAILURE, errorMessage: 'error' });
  }
}

export default function* () {
  yield all([
    takeLatest(Types.GET_TOP_TRACKS, getTopTracks),
    takeLatest(Types.SEARCH, search),
  ]);
}
