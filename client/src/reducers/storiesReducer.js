import { merge } from 'lodash';
import * as types from '../actions/actionTypes';


const initialState = {
  isFetching: false,
  didInvalidate: false,
  stories: [],
  currentPageStories: [],
  filterBy: {
    topStories: {
      items: [],
    },
  },
  geoScope: null,
};


export default function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_STORIES_REQUEST:
      return merge({}, state, {
        isFetching: true,
      });
    case types.FETCH_STORIES_SUCCESS:
      return merge({}, state, {
        isFetching: false,
        didInvalidate: false,
        stories: action.payload.data,
        geoScope: action.geoScope,
        filterBy: {
          topStories: {
            items: action.payload.data.slice(0, 9),
          },
        },
      });
    case types.FETCH_STORIES_FAILURE:
      return merge({}, state, {
        isFetching: false,
      });
    case types.UPVOTE_UPDATE_SUCCESS:
      return merge({}, state, {
        didInvalidate: true,
      });
    default:
      return state;
  }
}
