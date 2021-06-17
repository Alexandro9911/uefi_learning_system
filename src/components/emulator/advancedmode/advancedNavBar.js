import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setPage} from "../../../store/emulator/actions";

class AdvancedNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e){
       // alert(e.target.value)
        this.props.setPage(e.target.value)
    }

    render() {
        return(
            <div className="nav-advanced">
                <div className="navbar_btn_container">
                    <button value={'main'} onClick={this.onClickHandler} className="button-advanced">Main</button>
                    <button value={'ai'} onClick={this.onClickHandler} className="button-advanced">AI Tweacker</button>
                    <button value={'advanced'} onClick={this.onClickHandler} className="button-advanced">Advanced</button>
                    <button value={'boot'} onClick={this.onClickHandler} className="button-advanced">Boot</button>
                    <button value={'monitor'} onClick={this.onClickHandler} className="button-advanced">Monitor</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        current_select: state.emulator.current_select
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: bindActionCreators(setPage, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdvancedNavBar);