import React from "react";
import {connect} from "react-redux";
import PracticeResultStudent from "../../components/student/practiceResults/practiceResultStudent";
import {bindActionCreators} from "redux";
import {initEmulatorStarted} from "../../store/emulator/actions";
import {setEmulatorStarted} from "../../store/userpage/actions";
import PracticeResultTeacher from "../../components/teacher/TeacherPracticePage/practiceResultTeacher";
import {actionResultsPage} from "../../store/practiceResults/actions";

class EmulatorResultContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.emulator_status){
            return(
                <div/>
            )
        } else {
            if (this.props.link === '/teacher_page') {
                return(
                    <div className="join_page">
                        <PracticeResultTeacher
                            result={this.props.result}
                            initEmulatorStarted={this.props.initEmulatorStarted}
                            startEmulator={this.props.startEmulator}
                            actionResultsPage={this.props.actionResultsPage}
                        />
                    </div>
                    )
            } else {
                return (
                    <div className="join_page">
                        <PracticeResultStudent
                            result={this.props.practice_result}
                        />
                    </div>
                )
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        practice_result: state.practiceresult,
        link: state.auth.link,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initEmulatorStarted: bindActionCreators(initEmulatorStarted, dispatch),
        startEmulator: bindActionCreators(setEmulatorStarted,dispatch),
        actionResultsPage: bindActionCreators(actionResultsPage,dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmulatorResultContainer);

