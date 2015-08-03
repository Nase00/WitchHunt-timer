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
  ProgressBar
} from 'react-bootstrap';

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
  fractionize(seconds) {
    return seconds / 300 * 100;
  }
  render() {
    let dayNightIndicator = this.state.sleeping ? 'Night' : 'Day';
    let beginOrResume = this.state.timer < 300 ? 'Resume' : 'Begin Day';
    const wellStyles = {
      display: 'block',
      margin: '30px auto 0',
      height: '400'
    };
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={14} md={10}>
            <Well style={wellStyles}>
              <div className='vcenter'>
                <h1 className='timer'>
                  Time remaining <Label className='label-timer'>{this.timeLeft(this.state.timer)}</Label>
                </h1>
                <ProgressBar
                  striped
                  active={this.state.timer < 300 && !this.state.paused}
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
                <Button
                  bsStyle='danger'
                  bsSize='small'
                  onClick={this.reset}
                  placement={'right'}
                  block>
                  Reset
                </Button>
              </ButtonToolbar>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}
