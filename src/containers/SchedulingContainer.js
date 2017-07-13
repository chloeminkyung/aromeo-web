import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import {SchedulePaper, CreateButtonPaper, BlendPaper} from '../components/SchedulingPaper'
import CreateNewScheduleModal from '../components/CreateNewScheduleModal'
import CreateNewBlendModal from '../components/CreateNewBlendModal'
import RemoveModal from '../components/RemoveModal'
import {toggleCreateDefaultSchedule, toggleCreateBlend, getAllBlends, getAllSchedules,
    toggleRemoveBlend, removeBlend} from '../actions/scheduleAction'

class SchedulingContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getAllSchedules();
        this.props.getAllBlends();
    }
    render() {
        const {blends, schedules, targetId, toggleRemoveBlend, isFetchingBlends, isFetchingSchedules} = this.props;
        console.warn(blends)
        console.warn(schedules)

        return (
            <div>
                <h1>Scheduling Container</h1>
                <Panel header={<h3>Default Schedules</h3>}>
                    <Row>
                        {
                            schedules!=null && !isFetchingSchedules?
                                schedules.map(function(schedule){
                                    return <Col md={3}><SchedulePaper schedule={schedule} /></Col>
                                })
                                :<p>Fetching...</p>
                        }
                        <CreateButtonPaper onClickHandler={this.props.toggleCreateDefaultSchedule} title={"Create New Schedule"} />
                        <CreateNewScheduleModal blends={blends} />
                    </Row>
                </Panel>
                <Panel header={<h3>Blends</h3>}>
                    <Row>
                        {
                            blends!=null && !isFetchingBlends?
                                blends.map(function(blend){
                                    return <Col md={3}><BlendPaper blend={blend} toggleRemoveBlend={toggleRemoveBlend}/></Col>
                                })
                                :<p>Fetching...</p>
                        }
                        <CreateButtonPaper onClickHandler={this.props.toggleCreateBlend} title={"Create New Blending"} />
                        <CreateNewBlendModal />
                        <RemoveModal targetId={targetId} isOpen={this.props.isRemoveBlendModalOpen} item="this blend" toggleFunction={toggleRemoveBlend} removeFunction={this.props.removeBlend} />
                    </Row>
                </Panel>
            </div>
        );
    }
}

export default connect(
    state => ({
        blends: state.schedule.blends,
        schedules: state.schedule.schedules,
        targetId: state.schedule.targetId,
        isRemoveBlendModalOpen: state.schedule.isRemoveBlendModalOpen,
        isFetchingBlends: state.schedule.isFetchingBlends,
        isFetchingSchedules: state.schedule.isFetchingSchedules
    }),
    {
        toggleCreateDefaultSchedule, toggleCreateBlend, getAllBlends, getAllSchedules,
        toggleRemoveBlend, removeBlend

    }
)(SchedulingContainer)


const styles = {
    textCentered: {
        textAlign: 'center'
    }
};
