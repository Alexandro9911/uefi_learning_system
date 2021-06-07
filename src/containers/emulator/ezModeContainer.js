import React from "react";
import {connect} from "react-redux";
import EzModePage from "../../components/emulator/ezmode/ezModePage";
import {bindActionCreators} from "redux";
import {
    setCPUfanSpeed,
    setCPUfreq,
    setCPUtemperature,
    setDateSystem,
    setTempCpu,
    setTempMb, setTotalMem
} from "../../store/emulator/actions";

class EzModeContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if(!this.props.emulator_status){
            return (
                <div>
                    <EzModePage
                        emulator_object={this.props.emulator_object}
                        temperature_cpu={this.props.temperature_cpu}
                        setTempCpu={this.props.setTempCpu}
                        temperature_mb={this.props.temperature_mb}
                        setTempMb={this.props.setTempMb}

                        total_mem={this.props.total_mem}
                        cpu_speed={this.props.cpu_speed}
                        cpu_fan_speed={this.props.cpu_fan_speed}
                    />
                </div>
            )
        } else {
            return (<div></div>);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object,
        temperature_cpu: state.emulator.temperature_cpu,
        temperature_mb: state.emulator.temperature_mb,

        total_mem: state.emulator.total_mem,
        cpu_speed: state.emulator.cpu_speed,
        cpu_fan_speed: state.emulator.cpu_fan_speed
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
        setTotalMem: bindActionCreators(setTotalMem,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EzModeContainer)
