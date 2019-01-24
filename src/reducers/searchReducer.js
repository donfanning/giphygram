import { SEARCH_ACTION_TYPES } from '../actions/searchActions';
import { GIPHY_BATCH_SIZE } from '../config/system';

export const defaultSearchParams = {
  query: '',
  limit: GIPHY_BATCH_SIZE,
  offset: 0,
  rating: 'G',
  lang: 'en',
};

export const searchReducer = (state = defaultSearchParams, action) => {
  switch (action.type) {

    case SEARCH_ACTION_TYPES.UPDATE_SEARCH_QUERY:
      const query = action.payload;
      return {...state, query};

    default:
      return state;
  }
};
