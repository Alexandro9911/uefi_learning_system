import React from "react";
import {connect} from "react-redux";
import EmulatorPage from "../../components/emulator/EmulatorPage";
import {changeToAdvancedMode,
        changeToEzMode} from "../../store/emulator/actions";
import {bindActionCreators} from "redux";

class EmulatorContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <EmulatorPage
            emulator_objecct={this.props.emulator_object}
            toEzMode={this.props.toEzMode}
            toAdvancedMode={this.props.toAdvancedMode}
            emulator_status={this.props.emulator_status}
          />
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        emulator_object: state.emulator.emulator_object,
        emulator_status: state.emulator.advanced_mode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toEzMode: bindActionCreators(changeToEzMode,dispatch),
        toAdvancedMode: bindActionCreators(changeToAdvancedMode,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmulatorContainer);