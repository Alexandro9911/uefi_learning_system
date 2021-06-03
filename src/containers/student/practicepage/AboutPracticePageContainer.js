import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setStudentsPractice,setCurrentPractice} from "../../../store/practice_student/actions";
import AboutTaskRage from "../../../components/student/userpage/about_task_page";
import {setEmulatorClosed, setEmulatorStarted} from "../../../store/userpage/actions";

class AboutPracticePageContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <AboutTaskRage
                practice={this.props.current_practice}
                setEmulatorStarted={this.props.setEmulatorStarted}
            />
        );
    }

}
const mapStateToProps = (state) =>{
    return{
        current_practice: state.studentpractice.selected_practice
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        setListPractice: bindActionCreators(setStudentsPractice,dispatch),
        setCurrentPractice: bindActionCreators(setCurrentPractice,dispatch),
        setEmulatorStarted: bindActionCreators(setEmulatorStarted, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutPracticePageContainer)