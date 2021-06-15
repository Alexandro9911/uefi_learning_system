import React from "react";
import TestCreateForm from "./testCreateForm";
import ListTests from "./listTests";

class TeacherTestPage extends React.Component {
    render() {
        return (
            <div className="join_page">
                <TestCreateForm
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

                    setCurrSelection={this.props.setCurrSelection}
                    setCurrentTest={this.props.setCurrentTest}
                    setCurrentQuest={this.props.setCurrentQuest}
                    setCurrentAnswer={this.props.setCurrentAnswer}
                    setGroupTests={this.props.setGroupTests}
                    setNameTest={this.props.setNameTest}
                    setThemeTest={this.props.setThemeTest}
                    setForGroupTest={this.props.setForGroupTest}
                    setQuantQuest={this.props.setQuantQuest}
                    openForm={this.props.openForm}
                    closeForm={this.props.closeForm}
                />
                <ListTests
                    groups={this.props.groups}
                    group_tests={this.props.group_tests}
                    setList={this.props.setGroupTests}
                    ena_tests={this.props.ena_tests}
                    setActionModal={this.props.setActionModal}
                    selected_group={this.props.selected_group}
                    myId={this.props.myId}
                    setGroupSelection={this.props.setGroupSelection}
                />
            </div>
        );

    }
}
export default TeacherTestPage
