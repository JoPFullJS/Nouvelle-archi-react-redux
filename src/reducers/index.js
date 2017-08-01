import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {InterventionsReducer} from './InterventionsReducer';

//import {reducer as form} from 'redux-form';

export const rootReducer = combineReducers({
	intervention: InterventionsReducer,
	routing: routerReducer
})

export default rootReducer;