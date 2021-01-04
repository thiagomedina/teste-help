import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getTopTracks: null,
  getTopTracksSuccess: ['payload'],
  getTopTracksFailure: ['payload'],
  search: ['payload'],
  searchSuccess: ['payload'],
  searchFailure: ['payload'],
  addFavorites: ['payload'],
  removeFavorites: ['payload'],
});

const INITIAL_STATE = {
  data: [],
  searchResult: [],
  favorites: [],
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
  searchResult: action.payload,
});
const searchFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  searchResult: [...state.data, action.errorMessage],
});

const addFavorites = (state = INITIAL_STATE, action) => ({
  ...state,
  favorites: [...state.favorites, action.payload],
});

const removeFavorites = (state = INITIAL_STATE, action) => (
  console.log(action),{
  ...state,
  favorites: [...state.favorites.filter(song => song.track.id !== action.payload)],
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_TOP_TRACKS]: getTopTracks,
  [Types.GET_TOP_TRACKS_SUCCESS]: getTopTracksSuccess,
  [Types.GET_TOP_TRACKS_FAILURE]: getTopTracksFailure,
  [Types.SEARCH]: search,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_FAILURE]: searchFailure,
  [Types.ADD_FAVORITES]: addFavorites,
  [Types.REMOVE_FAVORITES]: removeFavorites,
});
