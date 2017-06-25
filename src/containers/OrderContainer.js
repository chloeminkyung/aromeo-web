import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';


import {Row, Col, Glyphicon, Button, Modal} from 'react-bootstrap'

class OrderContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <p>Order Page </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    {
    }
)(OrderContainer)