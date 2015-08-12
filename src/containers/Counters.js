import React from 'react/addons';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';

import Day from '../components/Day';
import Timer from '../components/Timer';
import * as Actions from '../actions/Actions';

function select(state) {
	return {
		day: state.day
	};
}

export default class Counters extends React.Component {
	render() {
		return (
			<Connector select={select}>
				{({ day, dispatch }) =>
					<div>
						<Day day={day}
							{...bindActionCreators(Actions, dispatch)}/>
						<Timer/>
					</div>
				}
			</Connector>
		);
	}
}
