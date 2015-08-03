import React from 'react/addons';
import moment from 'moment';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 300,
      day: 1,
      sleeping: false,
      running: false
    };
    this.onBegin = this.onBegin.bind(this);
    this.countdown = this.countdown.bind(this);
    this.reset = this.reset.bind(this);
  }
  countdown() {
    if (this.state.timer > 0 && this.state.running) {
      this.setState({timer: this.state.timer - 1});
    }
  }
  reset() {
    clearInterval(this.interval);
    this.setState({
      running: false,
      timer: 300
    });
  }
  onBegin() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
    } else {
      this.interval = setInterval(this.countdown, 1000);
      this.setState({running: true});
    }
  }
  timeLeft(seconds) {
    return moment(seconds * 1000).format('mm:ss');
  }
  render() {
    let dayNightIndicator = this.state.sleeping ? 'Night' : 'Day';
    let beginOrResume = this.state.timer < 300 ? 'Resume' : 'Begin Day';
    return (
      <div>
        <div className='day-night-indicator'>
          {dayNightIndicator + this.state.day}
        </div>
        <div className='timer'>
          {this.timeLeft(this.state.timer)}
        </div>
        <div className='timer-control'>
          <button
            className='button-begin'
            onClick={this.onBegin}>
            {this.state.running ? 'Pause' : beginOrResume}
          </button>
          <button
            onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
