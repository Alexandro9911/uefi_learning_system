import React from "react";
import {connect} from "react-redux";
import EmulatorPage from "../../components/emulator/EmulatorPage";
import {
    actionModalWarningAlert,
    changeToAdvancedMode,
    changeToEzMode
} from "../../store/emulator/actions";
import {bindActionCreators} from "redux";
import { setTextWarningModal} from "../../store/modals/actions";
import {setEmulatorStarted} from "../../store/userpage/actions";
import EmulatorResultContainer from "./emulatorResultContainer";

class EmulatorContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log("em cont : " + JSON.stringify(this.props.emulator_object))

            if (this.props.emulator_status) {
                return (
                    <div>
                        <EmulatorPage
                            emulator_status={this.props.advanced_mode}
                            emulator_object={this.props.emulator_object}
                            modal_warning={this.props.modal_warning}
                            modal_warning_text={this.props.modal_warning_text}
                            actionModalWarning={this.props.actionModalWarning}
                        />
                    </div>
                );
            } else {
                return (
                    <EmulatorResultContainer
                        emulator_status={this.props.emulator_status}
                    />
                )
            }
        }

}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object,
        emulator_status: state.useractivity.emulator_status,
        advanced_mode: state.emulator.advanced_mode,
        modal_warning: state.emulator.alert_warning,
        modal_warning_text: state.emulator.text_alert_warning,
        teacher_emulator: state.useractivity.teacher_emulator,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toEzMode: bindActionCreators(changeToEzMode, dispatch),
        toAdvancedMode: bindActionCreators(changeToAdvancedMode, dispatch),
        actionModalWarning: bindActionCreators(actionModalWarningAlert,dispatch),
        setTextWarningModal: bindActionCreators(setTextWarningModal,dispatch),
        setEmulatorStarted: bindActionCreators(setEmulatorStarted, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmulatorContainer);