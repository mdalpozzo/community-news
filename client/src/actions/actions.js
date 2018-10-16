import axios from 'axios';
import * as types from './actionTypes';

require('../../../dotenv').config();

const apiHost = process.env.API_HOST || 'http://localhost:8000/';

function url(endpoint) {
  return apiHost + endpoint;
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
  dispatch({
    type: types.FETCH_STORIES_REQUEST,
  });

  let endpoint = '';

  if (geotag.length === 5 && /^\d+$/.test(geotag)) {
    endpoint = 'api/stories/zipcode';
  }

  axios
    .get(url(endpoint), {
      params: {
        ID: geotag,
      },
    })
    .then(stories =>
      dispatch({
        type: types.FETCH_STORIES_SUCCESS,
        payload: stories,
        geoScope: geotag,
      }))
    .catch((err) => {
      dispatch({
        type: types.FETCH_STORIES_FAILURE,
      });
      console.log('ERROR:', err);
    });
};

export const publishStory = storyData => (dispatch) => {
  axios
    .post(url('api/stories/publish'), storyData)
    .then(() => {
      dispatch({
        type: types.PUBLISH_STORY_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.PUBLISH_STORY_FAILURE,
      });
      console.log('ERROR:', err);
    });
};

export const updateVote = (ID, voteCount) => (dispatch) => {
  const data = { ID, voteCount };
  axios
    .post(url('api/stories/upVote'), { data }, data)
    .then(() =>
      dispatch({
        type: types.UPVOTE_UPDATE_SUCCESS,
      }))
    .catch((err) => {
      console.log('ERROR:', err);
    });
};

export const updateNomination = (ID, nomCount) => (dispatch) => {
  const data = { ID, nomCount };
  axios
    .post(url('api/stories/upNom'), { data }, data)
    .then(() =>
      dispatch({
        type: types.UPVOTE_UPDATE_SUCCESS,
      }))
    .catch((err) => {
      console.log('ERROR:', err);
    });
};
