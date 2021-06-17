import React from "react";

import {connect} from "react-redux";
import AdvancedPage from "../../../components/emulator/advancedmode/pages/advancedPage";
import {setPageAdvancedAccordion} from "../../../store/emulator/actions";
import {bindActionCreators} from "redux";

class AdvancedPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AdvancedPage
                page_advanced_accordion={this.props.page_advanced_accordion}
                setPageAdvancedAccordion={this.props.setPageAdvancedAccordion}
                cpu_fan_speed={this.props.cpu_fan_speed}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        page_advanced_accordion: state.emulator.page_advanced_accordion,
        cpu_fan_speed: state.emulator.cpu_fan_speed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPageAdvancedAccordion: bindActionCreators(setPageAdvancedAccordion,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdvancedPageContainer)