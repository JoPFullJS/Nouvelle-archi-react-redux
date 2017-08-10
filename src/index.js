
//import getInterventions from './actions/getInterventions';

import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory } from 'react-router';

import Root from './routes/Root/Root';
import configureStore from './store';
import {syncHistoryWithStore} from 'react-router-redux';



const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

//store.dispatch(getInterventions());

ReactDOM.render(
	<Root store={store} history={history}/>
	, document.getElementById('root'));