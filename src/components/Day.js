import React from 'react';
import {
  Grid,
  Row,
  Col,
  Well,
  Label,
  ButtonToolbar,
  Button
} from 'react-bootstrap';

export default class Day extends React.Component {
  render() {
    const wellStyles = {
      display: 'block',
      margin: '50px auto 0',
      height: '400'
    };
    const {
      incrementDay,
      decrementDay,
      resetDay,
      day
    } = this.props;
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={14} md={10}>
            <Well style={wellStyles}>
              <div className='vcenter'>
                <h1 className='day-counter'>
                  Day <Label className='label-day'>{day}</Label>
                </h1>
              </div>
            </Well>
          </Col>
          <Col xs={4} md={2}>
            <Well style={wellStyles}>
              <ButtonToolbar className='vcenter'>
                <Button
                  bsStyle='primary'
                  onClick={incrementDay}
                  bsSize='large'
                  className='btn-first'
                  block>
                  Next Day
                </Button>
                <Button
                  bsStyle='warning'
                  bsSize='small'
                  onClick={decrementDay}
                  block>
                  Previous Day
                </Button>
                <Button
                  bsStyle='danger'
                  bsSize='small'
                  onClick={resetDay}
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
