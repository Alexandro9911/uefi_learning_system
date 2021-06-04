import React from "react";
import {connect} from "react-redux";
import AdvancedModePage from "../../components/emulator/advancedmode/advancedModePage";
import {bindActionCreators} from "redux";
import {setDateSystem} from "../../store/emulator/actions";

class AdvancedModeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.emulator_status){
            return (
                <div>
                    <AdvancedModePage emulator_object={this.props.emulator_object}/>
                </div>
            )
        } else {
            return (<div></div>)
        }

    }
}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDate: bindActionCreators(setDateSystem,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedModeContainer);