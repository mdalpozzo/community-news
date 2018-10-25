import * as types from './actionTypes';

// Register User
const registeruser = userdata => (dispatch) => {
  dispatch({
    type: types.TEST_DISPATCH,
    payload: userdata,
  });
};

export default registeruser;
