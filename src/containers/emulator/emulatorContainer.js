import React from "react";
import {connect} from "react-redux";
import EmulatorPage from "../../components/emulator/EmulatorPage";
import {
    actionModalWarningAlert,
    changeToAdvancedMode,
    changeToEzMode
} from "../../store/emulator/actions";
import {bindActionCreators} from "redux";
import Warning_modal from "../../components/modals/warning_modal";
import {actionModalWarning, setTextWarningModal} from "../../store/modals/actions";
import WarningModal from "../../components/modals/warning_modal";

class EmulatorContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <EmulatorPage
                    emulator_status={this.props.emulator_status}

                    modal_warning={this.props.modal_warning}
                    modal_warning_text={this.props.modal_warning_text}
                    actionModalWarning={this.props.actionModalWarning}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object,
        emulator_status: state.emulator.advanced_mode,
        modal_warning: state.emulator.alert_warning,
        modal_warning_text: state.emulator.text_alert_warning
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toEzMode: bindActionCreators(changeToEzMode, dispatch),
        toAdvancedMode: bindActionCreators(changeToAdvancedMode, dispatch),
        actionModalWarning: bindActionCreators(actionModalWarningAlert,dispatch),
        setTextWarningModal: bindActionCreators(setTextWarningModal,dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmulatorContainer);