import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getTopTracks: null,
  getTopTracksSuccess: ['payload'],
  getTopTracksFailure: ['payload'],
  search: ['payload'],
  searchSuccess: ['payload'],
  searchFailure: ['payload'],
});

const INITIAL_STATE = {
  data: [],
  filter: [],
  loading: false,
};

const getTopTracks = (state = INITIAL_STATE, action = {}) => ({
  ...state,
  loading: true,
});

const getTopTracksSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: action.payload,
});

const getTopTracksFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: [...state.data, action.errorMessage],
});

const search = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true,
});
const searchSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: action.payload,
});
const searchFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: [...state.data, action.errorMessage],
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_TOP_TRACKS]: getTopTracks,
  [Types.GET_TOP_TRACKS_SUCCESS]: getTopTracksSuccess,
  [Types.GET_TOP_TRACKS_FAILURE]: getTopTracksFailure,
  [Types.SEARCH]: search,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_FAILURE]: searchFailure,
});
