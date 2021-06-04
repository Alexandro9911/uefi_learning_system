import React from "react";
import {connect} from "react-redux";
import EzModePage from "../../components/emulator/ezmode/ezModePage";
import {bindActionCreators} from "redux";
import {setDateSystem} from "../../store/emulator/actions";
import {setTemp} from "../../store/emulator/actions";

class EzModeContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if(!this.props.emulator_status){
            return (
                <div>
                    <EzModePage
                        emulator_object={this.props.emulator_object}
                        temperature={this.props.temperature}
                        setTemp={this.props.setTemp}
                    />
                </div>
            )
        } else {
            return (<div></div>);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        emulator_object: state.emulator.emulator_object,
        temperature: state.emulator.temperature
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDate: bindActionCreators(setDateSystem,dispatch),
        setTemp: bindActionCreators(setTemp,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EzModeContainer)
