"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {toggleCreateBlend, createBlend} from '../actions/scheduleAction';
import OilRatioSlider from '../components/OilRatioSlider'
import {oilListForBlend} from '../constants/dummy';

class CreateNewBlendModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        };
    }

    reset(){
        this.props.toggleCreateBlend(false);
        this.setState({1:0,2:0,3:0,4:0,5:0});
    }

    createBlend() {
        //blend_id, hotel_id, blend_name, description, oils

        var body = {
            "hotel_id": 1,
            "blend_name": this.state.name,
            "description": this.state.description,
            "oils": [
                {
                    "oil_product_id": 1,
                    "ratio": this.state[1]
                },
                {
                    "oil_product_id": 2,
                    "ratio": this.state[2]
                },
                {
                    "oil_product_id": 3,
                    "ratio": this.state[3]
                },
                {
                    "oil_product_id": 4,
                    "ratio": this.state[4]
                },
                {
                    "oil_product_id": 5,
                    "ratio": this.state[5]
                }
            ]
        };

        //TODO make API call here.
        this.props.createBlend(body);
        // this.reset();
    }

    render() {
        const self = this;
        const action = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>this.reset()}
            />,
            <FlatButton
                label="Create"
                primary={true}
                onTouchTap={()=>this.createBlend()}
            />,
        ];

        function handleFirstSlider(oilName, event, value) {
            var update = {};
            update[oilName] = value;
            this.setState(update);
        };

        function handleTextInputs(name, event){
            var update = {};
            update[name] = event.target.value;
            this.setState(update);
        }

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
                                   onChange={handleTextInputs.bind(this, 'name')}
                            />
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col md={2}>
                            Description
                        </Col>
                        <Col md={10}>
                            <textarea className={"form-control"} onChange={handleTextInputs.bind(this,'description')} />
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
                                        <OilRatioSlider key={oil.name} oilName={oil.name} oilValue={self.state[oil.oil_position]}
                                                        onChangeHandler={handleFirstSlider.bind(self, oil.oil_position)} />
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
        toggleCreateBlend, createBlend
    }
)(CreateNewBlendModal)

const styles = {
    row: {marginTop: 10}
}
