import React from "react";

import {connect} from "react-redux";
import MonitorPage from "../../../components/emulator/advancedmode/pages/monitorPage";

class MonitorContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MonitorPage/>
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

export default connect(mapStateToProps,mapDispatchToProps)(MonitorContainer)