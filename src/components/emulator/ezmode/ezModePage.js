import React from "react";
import MonitorMenu from "./monitorMenu";
import BootMenu from "./bootMenu";

export default class EzModePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MonitorMenu temperature_cpu={this.props.temperature_cpu}
                             setTemp={this.props.setTempCpu}
                             temperature_mb={this.props.temperature_mb}
                             setTempMb={this.props.setTempMb}
                />
                <BootMenu emulator_object={this.props.emulator_object}/>
            </div>
        )
    }
}
