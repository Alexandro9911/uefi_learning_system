import React from "react";

import {connect} from "react-redux";
import BootPage from "../../../components/emulator/advancedmode/pages/bootPage";

class BootContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BootPage/>
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

export default connect(mapStateToProps,mapDispatchToProps)(BootContainer)