import React from "react";
import TestPage from "../../../components/student/testPage/testPage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    actionEnaResult,
    finishTest, setCurrAnswer,
    setListAnswers,
    setListQuest,
    setListStudentTest, setSelectedId, setTestResult,
    startTest
} from "../../../store/studentTests/actions";
import TestWindow from "../../../components/student/testPage/testWindow";
import ResultWindow from "../../../components/student/testPage/resultWindow";
import {actionAlertModal} from "../../../store/modals/actions";

class TestPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        let answ = ''
        let resp = await fetch("http://localhost/uefi_learning_system/selectStudentTest.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                myId: this.props.myId,
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        let arr = JSON.parse(JSON.stringify(answ))
        this.props.setListTest(arr);
    }

    render() {
        if (!this.props.ena_screen_test && !this.props.ena_screen_result) {
            return (
                <TestPage
                    list_test={this.props.list_tests}
                    ena_screen_test={this.props.ena_screen_test}
                    curr_list_quest={this.props.curr_list_quest}
                    current_test={this.props.current_test}
                    curr_list_answers={this.props.curr_list_answers}

                    setListQuest={this.props.setListQuest}
                    finishTest={this.props.finishTest}
                    startTest={this.props.startTest}
                    setListAnsw={this.props.setListAnsw}
                    setSelectedId={this.props.setSelectedId}
                />
            )
        } else {
            if(!this.props.ena_screen_result) {
                return (
                    <TestWindow
                        curr_list_quest={this.props.curr_list_quest}
                        list_test={this.props.list_tests}
                        myId={this.props.myId}
                        current_test={this.props.current_test}
                        finishTest={this.props.finishTest}
                        setListAnsw={this.props.setListAnsw}
                        setListQuest={this.props.setListQuest}
                        curr_list_answers={this.props.curr_list_answers}
                        setCurrAnswer={this.props.setCurrAnswer}
                        curr_answer={this.props.curr_answer}
                        actionEnaResult={this.props.actionEnaResult}
                        setTestResult={this.props.setTestResult}
                        selected_id={this.props.selected_id}
                    />
                )
            } else {
                return (
                    <ResultWindow
                        actionEnaResult={this.props.actionEnaResult}
                        result={this.props.result}
                    />
                )
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list_tests: state.studenttest.list_tests,
        myId: state.auth.id,
        ena_screen_test: state.studenttest.ena_screen_test,
        curr_list_quest: state.studenttest.curr_list_quest,
        current_test: state.studenttest.current_test,
        curr_list_answers: state.studenttest.curr_list_answers,
        curr_answer: state.studenttest.curr_answer,
        ena_screen_result: state.studenttest.ena_screen_result,
        result: state.studenttest.result,
        selected_id: state.studenttest.selected_id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setListAnsw: bindActionCreators(setListAnswers,dispatch),
        setListTest: bindActionCreators(setListStudentTest, dispatch),
        finishTest: bindActionCreators(finishTest,dispatch),
        setListQuest: bindActionCreators(setListQuest,dispatch),
        startTest: bindActionCreators(startTest,dispatch),
        setCurrAnswer: bindActionCreators(setCurrAnswer,dispatch),
        actionEnaResult: bindActionCreators(actionEnaResult,dispatch),
        actionAlertModal: bindActionCreators(actionAlertModal,dispatch),
        setTestResult: bindActionCreators(setTestResult,dispatch),
        setSelectedId: bindActionCreators(setSelectedId,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestPageContainer)