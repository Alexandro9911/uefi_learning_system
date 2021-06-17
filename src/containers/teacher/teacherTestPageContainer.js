import React from "react";
import {connect} from "react-redux";
import TeacherTestPage from "../../components/teacher/teacherTestpage/teacherTestPage";
import {bindActionCreators} from "redux";
import {
    closeForm,
    openForm, setActionModal,
    setCurrentAnswer,
    setCurrentQuest,
    setCurrentTest, setCurrSelection, setGroupForTest,
    setGroupTests, setNameTest, setQuantityQuest, setThemeTest, setGroupSelection, setResultsOfGroup
} from "../../store/teacherTests/actions";
import {actionTestResults} from "../../store/modals/actions";

class TeacherTestPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TeacherTestPage
                current_test={this.props.current_test}
                current_quest={this.props.current_quest}
                current_answer={this.props.current_answer}
                group_tests={this.props.group_tests}
                form_create_ena={this.props.form_create_ena}
                quant_quest={this.props.quant_quest}
                name_test={this.props.name_test}
                theme_test={this.props.theme_test}
                for_group_test={this.props.for_group_test}
                groups={this.props.groups}
                curr_selection={this.props.curr_selection}
                myId={this.props.myId}
                list_tests={this.props.list_tests}
                ena_tests={this.props.ena_tests}
                selected_group={this.props.selected_group}
                status={this.props.status}
                list_results={this.props.results_of_group}


                setResultsOfGroup={this.props.setResultsOfGroup}
                actionTestResults={this.props.actionTestResults}
                setGroupSelection={this.props.setGroupSelection}
                setCurrSelection={this.props.setCurrSelection}
                setCurrentTest={this.props.setCurrentTest}
                setCurrentQuest={this.props.setCurrentQuest}
                setCurrentAnswer={this.props.setCurrentAnswer}
                setGroupTests={this.props.setGroupTests}
                setNameTest={this.props.setNameTest}
                setThemeTest={this.props.setThemeTest}
                setForGroupTest={this.props.setForGroupTest}
                setQuantQuest={this.props.setQuantityQuest}
                openForm={this.props.openForm}
                closeForm={this.props.closeForm}
                setActionModal={this.props.setActionModal}

            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        current_test: state.teachertest.current_test,
        current_quest: state.teachertest.current_quest,
        current_answer: state.teachertest.current_answer,
        group_tests: state.teachertest.group_tests,
        form_create_ena: state.teachertest.form_create_ena,
        quant_quest: state.teachertest.quant_quest,
        name_test: state.teachertest.name_test,
        theme_test: state.teachertest.theme_test,
        for_group_test: state.teachertest.for_group_test,
        groups: state.listgroups.groups,
        curr_selection: state.teachertest.curr_selection,
        myId: state.auth.id,
        list_tests: state.teachertest.list_tests,
        ena_tests: state.teachertest.ena_tests,
        results_of_group: state.teachertest.results_of_group,
        selected_group: state.teachertest.selected_group,
        status: state.modals.modal_test_results
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        openForm: bindActionCreators(openForm,dispatch),
        closeForm: bindActionCreators(closeForm,dispatch),
        setCurrentTest: bindActionCreators(setCurrentTest, dispatch),
        setCurrentQuest: bindActionCreators(setCurrentQuest, dispatch),
        setCurrentAnswer: bindActionCreators(setCurrentAnswer,dispatch),
        setGroupTests: bindActionCreators(setGroupTests,dispatch),
        setQuantityQuest: bindActionCreators(setQuantityQuest,dispatch),
        setThemeTest: bindActionCreators(setThemeTest, dispatch),
        setForGroupTest: bindActionCreators(setGroupForTest,dispatch),
        setNameTest: bindActionCreators(setNameTest,dispatch),
        setCurrSelection: bindActionCreators(setCurrSelection, dispatch),
        setActionModal: bindActionCreators(setActionModal,dispatch),
        setGroupSelection: bindActionCreators(setGroupSelection,dispatch),
        actionTestResults: bindActionCreators(actionTestResults,dispatch),
        setResultsOfGroup: bindActionCreators(setResultsOfGroup,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeacherTestPageContainer);