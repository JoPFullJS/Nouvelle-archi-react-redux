import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import InterventionsListContainer from '../containers/InterventionsListContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={InterventionsListContainer} />
	</Route>
)