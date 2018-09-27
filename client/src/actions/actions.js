import axios from 'axios';
import * as types from './actionTypes';

const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:8000/';

function url(endpoint) {
  return API_ENDPOINT + endpoint;
}

export const receiveStories = (stories) => {
  console.log('receive');
  return {
    type: types.RECEIVE_STORIES,
    payload: {
      stories,
    },
  };
};

export const fetchStories = (geotag = '94121') => (dispatch) => {
  let endpoint = '';

  if (geotag.length === 5 && /^\d+$/.test(geotag)) {
    endpoint = 'zipcode';
  }

  axios.get(url(endpoint), {
    params: {
      ID: geotag,
    },
  })
    .then(stories => dispatch({
      type: types.FETCH_STORIES_SUCCESS,
      payload: stories,
      geoScope: geotag,
    }))
    .catch((err) => {
      console.log('ERROR:', err);
    });
};

export const updateVote = (ID, voteCount) => (dispatch) => {
  const indexInState = window.store.getState().stories.stories.findIndex(story => story._id === ID);
  const data = { ID, voteCount, indexInState };
  axios.post(url('upVote'), { data }, data)
    .then(() => dispatch({
      type: types.UPVOTE_UPDATE_SUCCESS,
    }))
    .catch((err) => {
      console.log('ERROR:', err);
    });
};

export const updateNomination = (ID, nomCount) => (dispatch) => {
  const indexInState = window.store.getState().stories.stories.findIndex(story => story._id === ID);
  const data = { ID, nomCount, indexInState };
  axios.post(url('upNom'), { data }, data)
    .then(() => dispatch({
      type: types.UPVOTE_UPDATE_SUCCESS,
    }))
    .catch((err) => {
      console.log('ERROR:', err);
    });
};

