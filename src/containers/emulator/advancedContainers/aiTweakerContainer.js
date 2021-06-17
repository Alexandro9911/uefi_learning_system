import React from "react";

import {connect} from "react-redux";
import AiTweakerPage from "../../../components/emulator/advancedmode/pages/aiTweakerPage";
import {bindActionCreators} from "redux";
import {
    actionModalWarningAlert,
    changeAImode,
    changeMultiplayer,
    changeMultiplayerArray,
    changeMultiplayerTo, setCurrIndex
} from "../../../store/emulator/actions";
import Warning_modal from "../../../components/modals/warning_modal";
import WarningModal from "../../../components/modals/warning_modal";


class AiTweakerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AiTweakerPage
                cpu_speed={this.props.cpu_speed}
                multiplayer_array={this.props.multiplayer_array}
                mutiplayer_mode={this.props.multiplayer_mode}
                state_cores={this.props.state_cores}
                quantity_cores={this.props.quantity_cores}
                multiplayer_to={this.props.multiplayer_to}
                multiplayer={this.props.multiplayer}
                ai_mode={this.props.ai_mode}
                curr_index={this.props.curr_index}

                changeMultiplayer={this.props.changeMultiplayer}
                changeMultiplayerTo={this.props.changeMultiplayerTo}
                changeAImode={this.props.changeAImode}
                changeMultiplayerArr={this.props.changeMultiplayerArr}
                setCurrIndex={this.props.setCurrIndex}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cpu_speed: state.emulator.cpu_speed,
        multiplayer_array: state.emulator.multiplayer_array,
        state_cores: state.emulator.state_cores,
        multiplayer_mode: state.emulator.multiplayer_mode,
        quantity_cores: state.emulator.quantity_cores,
        multiplayer_to: state.emulator.multiplayer_to,
        multiplayer: state.emulator.multiplayer,
        ai_mode: state.emulator.ai_mode,
        curr_index: state.emulator.curr_index,

        modal_warning: state.emulator.alert_warning,
        modal_warning_text: state.emulator.text_alert_warning
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAImode: bindActionCreators(changeAImode,dispatch),
        changeMultiplayerTo: bindActionCreators(changeMultiplayerTo, dispatch),
        changeMultiplayer: bindActionCreators(changeMultiplayer,dispatch),
        changeMultiplayerArr: bindActionCreators(changeMultiplayerArray,dispatch),
        setCurrIndex: bindActionCreators(setCurrIndex,dispatch),
        actionModalWarning: bindActionCreators(actionModalWarningAlert,dispatch),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AiTweakerContainer)