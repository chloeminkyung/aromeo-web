import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';


import {Row, Col, Glyphicon, Button, Modal} from 'react-bootstrap'

class HelpContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <p>This will be Help Page why is this not working?? </p>
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
)(HelpContainer)