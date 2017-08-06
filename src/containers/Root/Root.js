import React, {Component} from 'react'
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from '../../routes';


class Root extends Component {
  render () {
    const {store, history} = this.props;
    console.log(store)

    return (

        <Provider store={store}>
            <Router history={history}>
              {routes} 
            </Router>
        </Provider>

    )
  }
}


export default Root;
