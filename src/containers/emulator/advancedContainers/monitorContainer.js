import React from "react";

import {connect} from "react-redux";
import MonitorPage from "../../../components/emulator/advancedmode/pages/monitorPage";

class MonitorContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MonitorPage
                temperature_cpu={this.props.temperature_cpu}
                temperature_mb={this.props.temperature_mb}
                cpu_fan_speed={this.props.cpu_fan_speed}
                voltage_cpu={this.props.voltage_cpu}
                voltage_low={this.props.voltage_low}
                voltage_mid={this.props.voltage_mid}
                voltage_height={this.props.voltage_height}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        temperature_cpu: state.emulator.temperature_cpu,
        temperature_mb: state.emulator.temperature_mb,
        cpu_fan_speed: state.emulator.cpu_fan_speed,
        voltage_cpu: state.emulator.voltage_cpu,
        voltage_low: state.emulator.voltage_low,
        voltage_mid: state.emulator.voltage_mid,
        voltage_height: state.emulator.voltage_hight
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MonitorContainer)