import * as types from './actionTypes';
import axios from 'axios';

// Register User
const registeruser = userData => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      }));
};

export default registeruser;
