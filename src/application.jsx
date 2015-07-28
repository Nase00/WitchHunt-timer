import React from 'react/addons';
import moment from 'moment';

let timeLeft = (seconds) => {
	return moment(seconds * 1000).format('mm:ss');
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: 300,
			day: 1,
			sleeping: false,
			running: false
		};
		this.onClick = this.onClick.bind(this);
		this.countdown = this.countdown.bind(this);
	}
	componentWillUnmount() {
    clearInterval(this.interval)
  }
  countdown() {
  	if (this.state.timer > 0) {
	  	this.setState({timer: this.state.timer - 1});
	  } else {
	  	clearInterval(this.interval)
	  }
  }
	onClick() {
		if (this.state.running) {
			clearInterval(this.interval)
		} else {
			this.interval = setInterval(this.countdown, 100);
		}
	}
	render() {
		let dayNightIndicator = this.state.sleeping ? "Night" : "Day";
		return (
			<div>
				<div className='day-night-indicator'>
					{dayNightIndicator + this.state.day}
				</div>
				<div className='timer'>
					{timeLeft(this.state.timer)}
				</div>
				<div className='timer-control'>
					<button
						className='button-begin'
						value='start'
						onClick={this.onClick}>
						Begin Day
					</button>
				</div>
			</div>
		);
	}
}

React.render(<App/>, document.body);
