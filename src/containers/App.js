import React from 'react/addons';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';

import Counters from '../containers/Counters';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App extends React.Component {
	render() {
		return (
			<Provider redux={redux}>
				{
					() =>
					<div>
						<Counters/>
					</div>
				}
			</Provider>
		);
	}
}
