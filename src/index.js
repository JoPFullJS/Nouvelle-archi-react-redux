import React from 'react';
import ReactDOM from 'react-dom';
//import './assets/css/index.css';

//import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
//import routes from './routes';

//import { createStore, applyMiddleware } from 'redux';
//import reduxThunk from 'redux-thunk';
//import {rootReducer} from './reducers/index';
import Root from './containers/Root/Root'

import configureStore from './store'

import {syncHistoryWithStore} from 'react-router-redux';

import getInterventions from './actions/getInterventions';

// const configurationStore = (initialState) => {
// let reactRouterRedux = routerMiddleware(browserHistory)
// let middleware = [reduxThunk, reactRouterRedux]

// const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

// const store = createStoreWithMiddleware(
//       rootReducer,
//       initialState,
//       //DevTools.instrument()
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
// 	return store
// }

// const store = configurationStore();

// const history = syncHistoryWithStore(browserHistory);
// store.dispatch(getInterventions());
// ReactDOM.render(
	
// 	<Provider store={this.props.store}>
// 		<Router history={this.props.history} routes={routes} />
// 	</Provider>
// 	, document.getElementById('root'));

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(getInterventions());


const rootEl = document.getElementById('root');

ReactDOM.render(
  <Root store={store} history={history}/>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/Root/Root', () => {
    let NextApp = require('./containers/Root/Root').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}

