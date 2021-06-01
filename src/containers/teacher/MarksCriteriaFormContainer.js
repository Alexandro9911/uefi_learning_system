import React from "react";
import MarksCriteriaForm from "../../components/teacher/EmulatorFormCreate/MarksCriteriaForm";

import {connect} from "react-redux";

class marksCriteriaFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MarksCriteriaForm

            />
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
export default connect(mapStateToProps,mapDispatchToProps)(marksCriteriaFormContainer)