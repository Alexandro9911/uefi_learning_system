import React from "react";
import {connect} from "react-redux";
import EmulatorPage from "../../components/emulator/EmulatorPage";


class EmulatorContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <EmulatorPage/>
        );
    }
}

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmulatorContainer);