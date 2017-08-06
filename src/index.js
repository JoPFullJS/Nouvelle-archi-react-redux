
//import getInterventions from './actions/getInterventions';

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

import {browserHistory } from 'react-router';

import Root from './containers/Root/Root';
import configureStore from './store';
import {syncHistoryWithStore} from 'react-router-redux';



const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

//store.dispatch(getInterventions());

ReactDOM.render(
	<Root store={store} history={history}/>
	, document.getElementById('root'));

