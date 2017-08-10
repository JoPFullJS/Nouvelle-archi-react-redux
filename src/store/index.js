import {createStore, applyMiddleware} from 'redux';

import {rootReducer} from './../redux/reducers';
import reduxThunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';

/**
 * Configure dev store
 */
export default function configureStore(initialState) {

  let reactRouterRedux = routerMiddleware(browserHistory)
  let middleware = [reduxThunk, reactRouterRedux]
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

  const store = createStoreWithMiddleware(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
}
