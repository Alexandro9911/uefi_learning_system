import React from "react";

import {connect} from "react-redux";
import AdvancedPage from "../../../components/emulator/advancedmode/pages/advancedPage";

class AdvancedPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AdvancedPage/>
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

export default connect(mapStateToProps,mapDispatchToProps)(AdvancedPageContainer)