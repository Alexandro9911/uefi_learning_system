import React from "react";

import {connect} from "react-redux";
import AiTweakerPage from "../../../components/emulator/advancedmode/pages/aiTweakerPage";

class AiTweakerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AiTweakerPage/>
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

export default connect(mapStateToProps,mapDispatchToProps)(AiTweakerContainer)