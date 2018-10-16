import { combineReducers } from 'redux';
import storiesReducer from './storiesReducer';
import modalReducer from './modalReducer';
import { RECEIVE_STORIES, ADD_STORIES } from '../actions/actionTypes';

export const initialState = {
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

const rootReducer = combineReducers({
  stories: storiesReducer,
  modals: modalReducer,
});

// const rootReducer = storiesReducer;

export default rootReducer;

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case RECEIVE_STORIES:
//       return Object.assign({}, state, {
//         stories: action.payload,
//       });
//     default:
//       return state;
//   }
// };
