"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {toggleCreateBlend} from '../actions/scheduleAction';
import OilRatioSlider from '../components/OilRatioSlider'
import {oilListForBlend} from '../constants/dummy';

class CreateNewBlendModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            oil1: 0,
            oil2: 0,
            oil3: 0,
            oil4: 0,
            oil5: 0,
        };
    }

    render() {
        const self = this;
        const action = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>this.props.toggleCreateBlend(false)}
            />,
            <FlatButton
                label="Create"
                primary={true}
                disabled={true}
                onTouchTap={()=>this.props.toggleCreateBlend(false)}
            />,
        ];

        function handleFirstSlider(oilName, event, value) {
            var update = {};
            update[oilName] = value;
            this.setState(update);
        };

        return (
            <div>
                <Dialog
                    title="Create New Blend"
                    actions={action}
                    modal={true}
                    open={this.props.isCreateBlendModalOpen}
                >
                    <Row style={styles.row}>
                        <Col md={2}>
                            Blend Name
                        </Col>
                        <Col md={10}>
                            <input className={"form-control"} type="text" placeholder="Blend Name"
                                   onChange={()=>console.warn("test")}
                            />
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col md={2}>
                            Description
                        </Col>
                        <Col md={10}>
                            <textarea className={"form-control"} />
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col md={12}>
                            Blend Recipe
                        </Col>
                        <Col mdOffset={2} md={10}>
                            {
                                oilListForBlend.map(function(oil){
                                    return (
                                        <OilRatioSlider oilName={oil.name} oilValue={self.state['oil'+oil.oil_position]}
                                                        onChangeHandler={handleFirstSlider.bind(self, 'oil'+ oil.oil_position)} />
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Dialog>
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
    row: {marginTop: 10}
}
