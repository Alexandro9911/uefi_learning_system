import React from "react";
import {connect} from "react-redux";
import AdvancedModePage from "../../components/emulator/advancedmode/advancedModePage";
import {bindActionCreators} from "redux";
import {setDateSystem} from "../../store/emulator/actions";
import Warning_modal from "../../components/modals/warning_modal";
import {actionModalWarning, setTextWarningModal} from "../../store/modals/actions";

class AdvancedModeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.emulator_status){
            return (
                <div>
                    <AdvancedModePage
                        emulator_object={this.props.emulator_object}
                        current_select={this.props.current_select}
                    />
                </div>
            )
        } else {
            return (<div></div>)
        }

    }
}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object,
        current_select: state.emulator.current_select,
        modal_warning: state.modals.modal_warning,
        modal_warning_text: state.modals.modal_warning_text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDate: bindActionCreators(setDateSystem,dispatch),
        actionModalWarning: bindActionCreators(actionModalWarning,dispatch),
        setTextWarningModal: bindActionCreators(setTextWarningModal,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedModeContainer);