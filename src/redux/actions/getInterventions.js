//Asyncrone request and Promise based HTTP client for the browser
import axios from 'axios';


//Liste des actions
import {
	GET_INTERVENTIONS_REQUEST,GET_INTERVENTIONS_SUCCESS,GET_INTERVENTIONS_FAILURE
} from '../types/actionTypes';

//Point d'entré de notre API
const ROOT_URI = axios.create({
	baseURL: 'http://127.0.0.1:8000/'
});

ROOT_URI.defaults.responseType = 'json';
//ROOT_URI.defaults.timeOut = 2000;




const getInterventionsRequest = (request) => {
  return {
    type: GET_INTERVENTIONS_REQUEST,
    request
  }
};

const getInterventionsSuccess = (data) => {

  return {
    type: GET_INTERVENTIONS_SUCCESS,
    data
  }
};
const getInterventionsFailure = (error) => {

  return {
    type: GET_INTERVENTIONS_FAILURE,
    error
  }
};


export const getInterventions = () => {

  let request = "interventions";

  return dispatch => {
    dispatch(getInterventionsRequest(request));
    return ROOT_URI.get(request)
      .then(
        response => {
          dispatch(getInterventionsSuccess(response.data));
        },
        error => {
          dispatch(getInterventionsFailure(error))
        }
      )
  }
};

export default getInterventions;


