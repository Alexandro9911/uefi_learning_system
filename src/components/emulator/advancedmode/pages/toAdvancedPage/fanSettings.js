import React from "react";
import {connect} from "react-redux";
import EmulatorSelect from "../../../../Elements/emulatorSelect";
import {bindActionCreators} from "redux";
import {setFanGlobalMode, setManualFanMode} from "../../../../../store/emulator/actions";

class FanSettings extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandlerOpen = this.onClickHandlerOpen.bind(this);
        this.onClickHandlerClose = this.onClickHandlerClose.bind(this);
    }

    onClickHandlerOpen() {
        this.props.setPageAdvancedAccordion('none')
        this.props.setPageAdvancedAccordion('fan');
    }

    onClickHandlerClose(){
        this.props.setPageAdvancedAccordion('none')
    }

    render() {
        if(this.props.page_advanced_accordion === 'fan'){
            return(
                <div>
                    <div className="button_adv_item" onClick={this.onClickHandlerClose}>
                        <h5>Cooling system v</h5>
                    </div>
                    <div className="grid_layout">
                        <h5>Fan mode</h5>
                            <EmulatorSelect
                                partial_values={['auto','manual']}
                                action={this.props.setGlobalFanMode}
                                curr_selected={this.props.fan_global_mode}
                                enabled={true}
                            />
                        <h5>Manual Fan speed</h5>
                        <EmulatorSelect
                            partial_values={['fast','slow','optimal']}
                            action={this.props.setManualFanSpeed}
                            curr_selected={this.props.manual_fan_speed}
                            enabled={true}
                        />
                    </div>
                    <div className="grid_layout">
                        <h5>List Fans</h5>
                    </div>
                    <div className="text-muted">
                    <h5>CPU Fan  {this.props.cpu_fan_speed} RPM</h5>
                    <h5>FAN 1 :  {this.props.simple_fan_speed} RPM</h5>
                    <h5>FAN 2 :  N/A</h5>
                    <h5>FAN 3 :  N/A</h5>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="button_adv_item" onClick={this.onClickHandlerOpen}>
                    <h5>Cooling system ></h5></div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cpu_fan_speed: state.emulator.cpu_fan_speed,
        simple_fan_speed: state.emulator.simple_fan_speed,
        fan_global_mode: state.emulator.fan_global_mode,
        manual_fan_speed: state.emulator.manual_fan_speed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setManualFanSpeed: bindActionCreators(setManualFanMode, dispatch),
        setGlobalFanMode: bindActionCreators(setFanGlobalMode, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FanSettings)