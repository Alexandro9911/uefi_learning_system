import React from "react";
import BootPriority from "./BootPriority";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setBootPriority} from "../../../store/emulator/actions";

class BootMenu extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let listHdd = this.props.emulator_object.listHdd
        return(
            <BootPriority
                listHdd={listHdd}
                setBootPriority={this.props.setBootPriority}
                boot_priority_str={this.props.boot_priority_str}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boot_priority_str: state.emulator.boot_priority_str
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBootPriority: bindActionCreators(setBootPriority, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BootMenu)