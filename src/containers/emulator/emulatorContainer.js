import React from "react";
import {connect} from "react-redux";
import EmulatorPage from "../../components/emulator/EmulatorPage";
import {
    changeToAdvancedMode,
    changeToEzMode
} from "../../store/emulator/actions";
import {bindActionCreators} from "redux";

import {setCPUfreq, setCPUtemperature, setCPUfanSpeed, setTotalMem,setBusSpeed,setMultiplayerStr} from "../../store/emulator/actions";

class EmulatorContainer extends React.Component {
    constructor(props) {
        super(props);

        this.countMem = this.countMem.bind(this);
        this.getCPUspeed = this.getCPUspeed.bind(this);
    }

    countMem(list) {
        let total = 0;
        let len = Object.values(list).length;
        let ddrs = Object.values(list);
        for (let i = 0; i < len; i++) {
            total += +ddrs[i].mem
        }
        return total * 1024
    }

    getCPUspeed(str, base_freq) {
        let arr = str.split("#");
        let mult = +arr[0];
        let d = +base_freq * mult;
        return parseInt(d, 10);
    }
    componentDidMount() {
        let totalMem = this.countMem(this.props.emulator_object.listDdr);
        let speed = this.getCPUspeed(this.props.emulator_object.cpu.multiplayer_by_core, this.props.emulator_object.cpu.bus_speed)

        this.props.setBusSpeed(+this.props.emulator_object.cpu.bus_speed);
        this.props.setMultiplayerStr(this.props.emulator_object.cpu.multiplayer_by_core);

        this.props.setCPUfreq(speed);

        // Math.floor(num * 100) / 100
        let x = speed / 1000;
        x = Math.floor(x * 100) / 100
        let temperature = ((((x * (-18.859)) / Math.log(Math.abs((11.963 * x)) + 1.0E-5)) *
            (-11.335)) / Math.log(Math.abs((((x * x) - 23.6686) * x)) + 1.0E-5))
        this.props.setCPUtemperature(Math.floor(temperature * 100) / 100);
        x = Math.floor(temperature * 100) / 100

        let speed_fan_counted = (((((2855993.5481*(x-(-0.120)))^0.3965)
            -(55.915-x))-(((16.6165/x)^(-3.181))-
            ((-18.193)-x)))-37.9835);
        speed_fan_counted = speed_fan_counted /100000
        if (speed_fan_counted > +this.props.emulator_object.listFan[0].max_rpm) {
            speed_fan_counted = +this.props.emulator_object.listFan[0].max_rpm
        }
        this.props.setCPUfanSpeed(Math.floor(speed_fan_counted * 100) / 100);
        this.props.setTotalMem(totalMem);
    }

    render() {
        return (
            <EmulatorPage
                emulator_objecct={this.props.emulator_object}
                toEzMode={this.props.toEzMode}
                toAdvancedMode={this.props.toAdvancedMode}
                emulator_status={this.props.emulator_status}
                bus={this.props.bus_speed}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object,
        emulator_status: state.emulator.advanced_mode,
        bus_speed: state.emulator.bus_speed,
        multiplayer_str: state.emulator.multiplayer_str
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toEzMode: bindActionCreators(changeToEzMode, dispatch),
        toAdvancedMode: bindActionCreators(changeToAdvancedMode, dispatch),
        setCPUfreq: bindActionCreators(setCPUfreq, dispatch),
        setCPUfanSpeed: bindActionCreators(setCPUfanSpeed, dispatch),
        setCPUtemperature: bindActionCreators(setCPUtemperature, dispatch),
        setTotalMem: bindActionCreators(setTotalMem, dispatch),
        setBusSpeed: bindActionCreators(setBusSpeed,dispatch),
        setMultiplayerStr: bindActionCreators(setMultiplayerStr,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmulatorContainer);