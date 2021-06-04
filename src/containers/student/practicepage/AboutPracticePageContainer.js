import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setStudentsPractice,setCurrentPractice} from "../../../store/practice_student/actions";
import AboutTaskRage from "../../../components/student/userpage/about_task_page";
import {setEmulatorClosed, setEmulatorStarted} from "../../../store/userpage/actions";
import {initEmulatorStore} from "../../../store/emulator/actions";

class AboutPracticePageContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <AboutTaskRage
                practice={this.props.current_practice}
                setEmulatorStarted={this.props.setEmulatorStarted}
                emulator_object={this.props.emulator_object}
                initEmulator={this.props.initEmulator}
            />
        );
    }

}
const mapStateToProps = (state) =>{
    return{
        current_practice: state.studentpractice.selected_practice,
        emulator_object: state.emulator.emulator_object
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        setListPractice: bindActionCreators(setStudentsPractice,dispatch),
        setCurrentPractice: bindActionCreators(setCurrentPractice,dispatch),
        setEmulatorStarted: bindActionCreators(setEmulatorStarted, dispatch),
        initEmulator: bindActionCreators(initEmulatorStore,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutPracticePageContainer)