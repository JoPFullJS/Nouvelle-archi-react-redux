//Liste des actions
import {
	GET_INTERVENTIONS_REQUEST,GET_INTERVENTIONS_SUCCESS,GET_INTERVENTIONS_FAILURE
	} from '../constants/actionTypes';

export const initialState = {
	interventionsList: null,
	lastRequest: null
};

export const InterventionsReducer = (state = initialState, action) => {

	const {data, type, request, error} = action;
	

	switch (type) {
		case GET_INTERVENTIONS_REQUEST:
			return {
				...state,
				lastRequest: request,
			};
		case GET_INTERVENTIONS_SUCCESS:
		
			return {
				...state,
				interventionsList: data,
			};
		case GET_INTERVENTIONS_FAILURE:
			return {
				...state,
				error,
			};
		default:
        	return state;
	}
};

// Get all posts
export default InterventionsReducer;