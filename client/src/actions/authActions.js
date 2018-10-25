import * as types from './actionTypes';
import axios from 'axios';

// Register User
const registeruser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      }));
};

export default registeruser;
