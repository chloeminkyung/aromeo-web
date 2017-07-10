"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Slider from 'material-ui/Slider';

import {toggleCreateBlend} from '../actions/scheduleAction';

class CreateNewBlendModal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {oilName, oilValue, onChangeHandler} = this.props;
        return (
            <div>
                <Row>
                    <Col md={2}>
                        {oilName}
                    </Col>
                    <Col md={1}>
                        {oilValue}
                    </Col>
                    <Col md={9}>
                        <Slider value={oilValue} step={1} min={0} max={5}
                                onChange={(event, value)=>onChangeHandler(event, value)} style={styles.slider}/>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default connect(
    state => ({
        isCreateBlendModalOpen: state.schedule.isCreateBlendModalOpen,
    }),
    {
        toggleCreateBlend
    }
)(CreateNewBlendModal)


const styles = {
  slider: {
      marginBottom: 0,
      marginTop:-20,
      padding: 0
  }
};