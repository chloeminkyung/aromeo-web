"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {toggleCreateBlend} from '../actions/scheduleAction';

class CreateNewBlendModal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
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

        return (
            <div>
                <Dialog
                    title="Create New Blend"
                    actions={action}
                    modal={true}
                    open={this.props.isCreateBlendModalOpen}
                >
                    Create New Blend
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
