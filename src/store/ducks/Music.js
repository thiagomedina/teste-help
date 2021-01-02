import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getTopTracks: null,
  getTopTracksSuccess: ['payload'],
  getTopTracksFailure: ['payload'],
});

const INITIAL_STATE = {
  data: [],
  getTopTracksLoading: false,
};

const getTopTracks = (state = INITIAL_STATE, action = {}) => ({
  ...state,
  getTopTracksLoading: true,
});

const getTopTracksSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  getTopTracksLoading: false,
  data: action.payload,
});

const getTopTracksFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  getTopTracksLoading: false,
  data:[...state.data, action.errorMessage]
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_TOP_TRACKS]: getTopTracks,
  [Types.GET_TOP_TRACKS_SUCCESS]: getTopTracksSuccess,
  [Types.GET_TOP_TRACKS_FAILURE]: getTopTracksFailure,
});
