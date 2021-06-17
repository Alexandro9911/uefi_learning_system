import React from "react";

import {connect} from "react-redux";
import AiTweakerPage from "../../../components/emulator/advancedmode/pages/aiTweakerPage";
import {
    setCPUfanSpeed,
    setCPUfreq,
    setCPUtemperature,
    setDateSystem, setMultiplayer,
    setTempCpu,
    setTempMb, setTotalMem
} from "../../../store/emulator/actions";
import {bindActionCreators} from "redux";
import {actionModalWarning, setTextWarningModal} from "../../../store/modals/actions";

class AiTweakerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AiTweakerPage
            emulator_object={this.props.emulator_object}
            temperature_cpu={this.props.temperature_cpu}
            setTempCpu={this.props.setTempCpu}
            temperature_mb={this.props.temperature_mb}
            setTempMb={this.props.setTempMb}
            setCPUfreq={this.props.setCPUfreq}
            setCPUtemperature={this.props.setCPUtemperature}
            setCPUfanSpeed={this.props.setCPUfanSpeed}

            total_mem={this.props.total_mem}
            cpu_speed={this.props.cpu_speed}
            cpu_fan_speed={this.props.cpu_fan_speed}

            multiplayer={this.props.multiplayer}
            setMultiplayer={this.props.setMultiplayer}

            action={this.props.actionModatWarning}
            text={this.props.setTextModalWarning}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object,
        temperature_cpu: state.emulator.temperature_cpu,
        temperature_mb: state.emulator.temperature_mb,

        total_mem: state.emulator.total_mem,
        cpu_speed: state.emulator.cpu_speed,
        cpu_fan_speed: state.emulator.cpu_fan_speed,
        multiplayer: state.emulator.multiplayer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDate: bindActionCreators(setDateSystem,dispatch),
        setTempCpu: bindActionCreators(setTempCpu,dispatch),
        setTempMb: bindActionCreators(setTempMb,dispatch),
        setCPUfreq: bindActionCreators(setCPUfreq,dispatch),
        setCPUfanSpeed: bindActionCreators(setCPUfanSpeed, dispatch),
        setCPUtemperature: bindActionCreators(setCPUtemperature,dispatch),
        setTotalMem: bindActionCreators(setTotalMem,dispatch),
        setMultiplayer: bindActionCreators(setMultiplayer,dispatch),
        actionModatWarning: bindActionCreators(actionModalWarning,dispatch),
        setTextModalWarning: bindActionCreators(setTextWarningModal, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AiTweakerContainer)