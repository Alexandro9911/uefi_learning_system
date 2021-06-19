import React from "react";
import {connect} from "react-redux";
import MarksCriteriaForm from "../../components/teacher/EmulatorFormCreate/MarksCriteriaForm";
import {bindActionCreators} from "redux";
import {
    setBootPriority, setBusFreqModifyed, setDateTimeSetup, setIntervalCpuFreq, setIntervalTemp,
    setModeMult, setRaidCreated,
    setReqMult,
    setReqMultArray,
    setStateCores, setSyncDDR
} from "../../store/emulatorCreate/actions";

class CriteriaContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MarksCriteriaForm
                dynamicHDDList={this.props.dynamicHDDList}
                cpu={this.props.cpu}
                interval_temp={this.props.interval_temp}
                interval_freq_cpu={this.props.interval_freq_cpu}
                sync_ddr={this.props.sync_ddr}
                raid_created={this.props.raid_created}
                date_time_setup={this.props.date_time_setup}
                bus_freq_modifyed={this.props.bus_freq_modifyed}
                mode_mult={this.props.mode_mult}
                req_mult={this.props.req_mult}
                req_mult_array={this.props.req_mult_array}
                state_cores={this.props.state_cores}
                boot_priority={this.props.boot_priority}

                setBootPriority={this.props.setBootPriority}
                setStateCores={this.props.setStateCores}
                setReqMultArray={this.props.setReqMultArray}
                setReqMult={this.props.setReqMult}
                setModeMult={this.props.setModeMult}
                setRaidCreated={this.props.setRaidCreated}
                setBusFreqModifyed={this.props.setBusFreqModifyed}
                setDateTimeSetup={this.props.setDateTimeSetup}
                setSyncDDR={this.props.setSyncDDR}
                setIntervalCpuFreq={this.props.setIntervalCpuFreq}
                setIntervalTemp={this.props.setIntervalTemp}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dynamicHDDList: state.emulatorform.listHdd,
        cpu: state.emulatorform.cpu,
        interval_temp: state.emulatorform.interval_temp,
        interval_freq_cpu: state.emulatorform.interval_freq_cpu,
        sync_ddr: state.emulatorform.sync_ddr,
        raid_created: state.emulatorform.raid_created,
        date_time_setup: state.emulatorform.date_time_setup,
        bus_freq_modifyed: state.emulatorform.bus_freq_modifyed,
        mode_mult: state.emulatorform.mode_mult,
        req_mult: state.emulatorform.req_mult,
        req_mult_array: state.emulatorform.req_mult_array,
        state_cores: state.emulatorform.state_cores,
        boot_priority: state.emulatorform.boot_priority,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBootPriority: bindActionCreators(setBootPriority,dispatch),
        setStateCores: bindActionCreators(setStateCores,dispatch),
        setReqMultArray: bindActionCreators(setReqMultArray,dispatch),
        setReqMult: bindActionCreators(setReqMult,dispatch),
        setRaidCreated: bindActionCreators(setRaidCreated,dispatch),
        setModeMult: bindActionCreators(setModeMult,dispatch),
        setBusFreqModifyed: bindActionCreators(setBusFreqModifyed,dispatch),
        setDateTimeSetup: bindActionCreators(setDateTimeSetup,dispatch),
        setSyncDDR: bindActionCreators(setSyncDDR,dispatch),
        setIntervalCpuFreq: bindActionCreators(setIntervalCpuFreq,dispatch),
        setIntervalTemp: bindActionCreators(setIntervalTemp,dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CriteriaContainer)