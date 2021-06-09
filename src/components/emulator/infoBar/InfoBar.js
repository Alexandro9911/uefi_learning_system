import React from "react";
import TimerBlock from "./TimerBlock";
import SystemInfo from "./system_info";
import EzModePage from "../ezmode/ezModePage";

export default class InfoBar extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeModeHandler = this.onChangeModeHandler.bind(this);
        this.titleHandler = this.titleHandler.bind(this);
    }

    onChangeModeHandler(e) {
        e.preventDefault();
        if(this.props.emulator_mode){
            this.props.toEzMode()
        } else {
            this.props.toAdvancedMode()
        }
    }

    titleHandler() {
        if(this.props.emulator_mode){
            return 'to Ez mode'
        } else {
            return 'to Advanced mode'
        }
    }



    render() {
        let name = this.titleHandler()
        return (
            <div className='top_bar_emulator'>
                <TimerBlock
                    time={this.props.system_time}
                    date={this.props.system_date}
                    hideModalDateTime={this.props.hideModalDateTime}
                    showModalDateTime={this.props.showModalDateTime}
                    modal_date_time={this.props.modal_date_time}
                />
                <div>
                    <SystemInfo emulator={this.props.emulator_object}
                                total_mem={this.props.total_mem}
                                cpu_speed={this.props.cpu_speed}
                    />
                </div>
                <div>
                    <div className="simple-button" onClick={this.onChangeModeHandler}>{name}</div>
                    <br/>
                    <div className="simple-button">save and exit</div>
                </div>
            </div>
        )
    }
}