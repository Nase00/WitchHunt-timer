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
      margin: '0 auto 10px',
      height: '300'
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
          <Col xs={12} md={8}>
            <Well style={wellStyles}>
              <h1 className='vcenter'>Day: <Label>{day}</Label></h1>
            </Well>
          </Col>
          <Col xs={6} md={4}>
            <Well style={wellStyles}>
              <ButtonToolbar className='vcenter'>
                <Button
                  bsStyle='primary'
                  onClick={incrementDay}
                  bsSize='large'
                  block>
                  Next Day
                </Button>
                <Button
                  bsStyle='warning'
                  bsSize='medium'
                  onClick={decrementDay}>
                  Previous Day
                </Button>
                <Button
                  bsStyle='danger'
                  bsSize='medium'
                  onClick={resetDay}
                  placement={'right'}>
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
