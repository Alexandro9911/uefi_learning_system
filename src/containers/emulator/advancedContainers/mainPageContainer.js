import React from "react";

import {connect} from "react-redux";
import MainPage from "../../../components/emulator/advancedmode/pages/mainPage";
import {setDateSystem,setTimeSystem} from "../../../store/emulator/actions";
import {bindActionCreators} from "redux";
import {showModalDateTime,hideModalDateTime} from "../../../store/emulatorModals/actions";
import EzModePage from "../../../components/emulator/ezmode/ezModePage";

class MainPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainPage
                emulator_object={this.props.emulator_object}
                setDateSystem={this.props.setDateSystem}
                setTimeSystem={this.props.setTimeSystem}
                hideModalDateTime={this.props.hideModalDateTime}
                showModalDateTime={this.props.showModalDateTime}
                total_mem={this.props.total_mem}
                cpu_speed={this.props.cpu_speed}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object,
        total_mem: state.emulator.total_mem,
        cpu_speed: state.emulator.cpu_speed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModalDateTime: bindActionCreators(hideModalDateTime,dispatch),
        showModalDateTime: bindActionCreators(showModalDateTime, dispatch),
        setDateSystem: bindActionCreators(setDateSystem,dispatch),
        setTimeSystem: bindActionCreators(setTimeSystem,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPageContainer)