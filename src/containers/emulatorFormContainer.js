import React from "react";
import EmulatorFormCreate from "../components/EmylatorFormCreate/emulatorFormCreate";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class EmulatorFormContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <EmulatorFormCreate/>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmulatorFormContainer);

