import React from "react";

import {connect} from "react-redux";
import ToolsPage from "../../../components/emulator/advancedmode/pages/toolsPage";

class ToolsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ToolsPage/>
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

export default connect(mapStateToProps,mapDispatchToProps)(ToolsContainer)