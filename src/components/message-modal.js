import React from 'react/addons';

import {
  Grid,
  Row,
  Col,
  Well,
  Label,
  ButtonToolbar,
  Button,
  Input,
} from 'react-bootstrap';

export default class MessageModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const textStyle = {
      position: 'absolute',
      top: 0,
      left: 0
    };
    
    return (
      <textarea
        style={textStyle}
        name='message'
        rows='10'
        cols='50'
        placeholder='Communicate here'/>
    );
  }
}
