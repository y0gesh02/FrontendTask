import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  let users = [];
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        users.push(...response.data.data);
        axios
          .get("https://reqres.in/api/users?page=2")
          .then((response) => {
            users.push(...response.data.data);
            dispatch(fetchUsersSuccess(users));
          })
          .catch((error) => {
            dispatch(fetchUsersFailure(error));
          });
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

export default fetchUsers;