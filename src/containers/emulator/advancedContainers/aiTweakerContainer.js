import React from "react";

import {connect} from "react-redux";
import AiTweakerPage from "../../../components/emulator/advancedmode/pages/aiTweakerPage";
import {setCPUfreq} from "../../../store/emulator/actions";
import {bindActionCreators} from "redux";

class AiTweakerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AiTweakerPage
            emulator_object={this.props.emulator_object}
            setCPUfreq={this.props.setCPUfreq}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCPUfreq: bindActionCreators(setCPUfreq,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AiTweakerContainer)