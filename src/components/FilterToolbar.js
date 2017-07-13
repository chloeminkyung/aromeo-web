import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {Row, Col, Glyphicon, Button} from 'react-bootstrap';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import AromeoAddRemoveModal from './AromeoAddRemoveModal'

import OilStatus from './OilStatus'
import {filterWithText, toggleStartManageAromeo, toggleAddAromeoDevice, toggleRemoveAromeoDevice, resetFilterOptions} from '../actions/controlAction'


class FilterToolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 1,
            open: false,
        };
    }

    handleChange(event, index, value){
        this.setState({value});
    }

    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose () {
        this.setState({
            open: false,
        });
    };

    saveChanges() {
        this.props.toggleStartManageAromeo(false);
        // TODO
    }

    handleResetFilter(){
        this.props.resetFilterOptions();
        this.props.filterWithText("");
    }

    render(){
        const {isManageMode, filterOption,
            toggleStartManageAromeo, toggleAddAromeoDevice, toggleRemoveAromeoDevice} = this.props;
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <ToolbarTitle text=" Filter By: " style={styles.toolbarTitleStyle}/>
                        <label style={styles.label}>Device Status</label>
                        <DropDownMenu title="Device Status" value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="All" />
                            <MenuItem value={2} primaryText="On" />
                            <MenuItem value={3} primaryText="Off" />
                        </DropDownMenu>
                        <label style={styles.label}>Oil Status</label>
                        <DropDownMenu label="Oil Status" value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="All" />
                            <MenuItem value={2} primaryText="Ran Out" />
                            <MenuItem value={3} primaryText="Running Out" />
                        </DropDownMenu>
                        <label style={styles.label}>Room No</label>
                        <input type="text" placeholder="Search"
                               value={filterOption.text}
                               onChange={(e)=>this.props.filterWithText(e.target.value.toLowerCase())}
                               style={{margin:8, paddingLeft: 5, width: 120}}
                        />

                        <RaisedButton
                            onTouchTap={()=>this.handleResetFilter()}
                            label="Reset Filter"
                        />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarSeparator />
                        <div style={styles.totalCountContainer}>
                            <p style={styles.totalText}>Total</p>
                            <OilStatus runningOut={10} ranOut={5} />
                        </div>
                        <ToolbarSeparator />
                        <RaisedButton
                            onTouchTap={(event)=>isManageMode? this.saveChanges(): this.handleTouchTap(event)}
                            label={isManageMode?"Save":"Control"}
                        />
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            onRequestClose={()=>this.handleRequestClose()}
                        >
                            <Menu onItemTouchTap={()=>this.handleRequestClose()}>
                                <MenuItem primaryText="Manage" onTouchTap={()=>toggleStartManageAromeo(true)} />
                                <MenuItem primaryText="+ Aromeo" onTouchTap={()=>toggleAddAromeoDevice(true)} />
                                <MenuItem primaryText="- Aromeo" onTouchTap={()=>toggleRemoveAromeoDevice(true)} />
                            </Menu>
                        </Popover>
                    </ToolbarGroup>
                </Toolbar>
                <AromeoAddRemoveModal />
            </div>
        );
    }
}

export default connect(
    state => ({
        filterOption: state.control.filterOption,
        filteredDataList: state.control.filteredDataList,
        isManageMode: state.control.isManageMode
    }),
    {
        filterWithText, resetFilterOptions,
        toggleStartManageAromeo, toggleAddAromeoDevice, toggleRemoveAromeoDevice
    }
)(FilterToolbar)

const styles = {
    filterToolbarContainer: {
        marginTop: 15
    },
    label: {
        marginTop: 17
    },
    toolbarTitleStyle: {
        marginLeft: 10
    },
    totalCountContainer: {
        marginLeft: 20,
        padding: 5
    },
    totalText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 0,
        paddingBottom: 0
    }
}
