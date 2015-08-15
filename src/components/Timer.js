import React from 'react/addons';
import moment from 'moment';

import {
  Grid,
  Row,
  Col,
  Well,
  Label,
  ButtonToolbar,
  Button,
  Input,
  ProgressBar
} from 'react-bootstrap';

import MessageModal from '../components/message-modal';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 300, // 5 minutes
      timer: 300,
      day: 1,
      sleeping: false,
      running: false,
      messagePlayers: false
    };
    this.onBegin = this.onBegin.bind(this);
    this.countdown = this.countdown.bind(this);
    this.reset = this.reset.bind(this);
    this.setCustomTime = this.setCustomTime.bind(this);
    this.toggleMessagePlayers = this.toggleMessagePlayers.bind(this);
  }
  countdown() {
    if (this.state.timer > 0 && this.state.running) {
      this.setState({timer: this.state.timer - 1});
    }
  }
  timeLeft(seconds) {
    return moment(seconds * 1000).format('mm:ss');
  }
  fractionize(seconds) {
    return seconds / 300 * 100;
  }
  inProgress() {
    return this.state.timer < 300 && this.state.running;
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
  reset() {
    clearInterval(this.interval);
    this.setState({
      running: false,
      timer: 300
    });
  }
  setCustomTime() {
    let customSeconds = this.refs.customTime.getValue() * 60;
    let customTimer = this.timeLeft(customSeconds);
    if (moment(customTimer, 'MM:SS', true).isValid()) {
      this.setState({timer: customSeconds});
    } else {
      // TODO: Handle bad input
    }
  }
  toggleMessagePlayers() {
    this.setState({messagePlayers: !this.state.messagePlayers});
  }
  render() {
    let beginOrResume = this.state.timer < 300 ? 'Resume' : 'Begin Day';
    let inProgress = this.inProgress();
    let blink = this.state.timer === 0 ? 'blink' : '';
    let messagePlayers = this.state.messagePlayers && !this.state.running;
    
    const wellStyles = {
      display: 'block',
      margin: '30px auto 0',
      height: '400'
    };

    const setCustomTimeButton = (
      <Button onClick={this.setCustomTime}>
        Set
      </Button>
    );
console.log(!this.state.running, this.state.messagePlayers)
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={14} md={10}>
            <Well style={wellStyles}>
              <div className='vcenter'>
                <h1 className='timer'>
                  Time remaining
                  <Label className='label-timer'>
                    <span className={blink}>
                      {messagePlayers ? <MessageModal/> : this.timeLeft(this.state.timer)}
                    </span>
                  </Label>
                </h1>
                <ProgressBar
                  striped
                  active={inProgress}
                  bsStyle='danger'
                  now={this.fractionize(this.state.timer)}/>
              </div>
            </Well>
          </Col>
          <Col xs={4} md={2}>
            <Well style={wellStyles}>
              <ButtonToolbar className='vcenter'>
                <Button
                  bsStyle='primary'
                  onClick={this.onBegin}
                  bsSize='large'
                  className='btn-first'
                  block>
                  {this.state.running ? 'Pause' : beginOrResume}
                </Button>
                <Input
                  className='set-time'
                  type='text'
                  ref='customTime'
                  bsSize='small'
                  placeholder='minutes'
                  buttonBefore={setCustomTimeButton}/>
                <Button
                  bsStyle='danger'
                  bsSize='small'
                  onClick={this.reset}
                  placement={'right'}
                  block>
                  Reset
                </Button>
                <Button
                  bsStyle='primary'
                  bsSize='large'
                  onClick={this.toggleMessagePlayers}
                  placement={'right'}
                  block>
                  Message
                </Button>
              </ButtonToolbar>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}
