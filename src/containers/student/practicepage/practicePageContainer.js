import React from "react";
import PracticePage from "../../../components/student/practicepage/practicePage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setStudentsPractice,setCurrentPractice} from "../../../store/practice_student/actions";

class PracticePageContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <PracticePage
                listPractice={this.props.listPractice}
                setCurrentPractice={this.props.setCurrentPractice}
            />
        );
    }

}
const mapStateToProps = (state) =>{
    return{
        listPractice: state.studentpractice.listPractice
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        setListPractice: bindActionCreators(setStudentsPractice,dispatch),
        setCurrentPractice: bindActionCreators(setCurrentPractice,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PracticePageContainer)