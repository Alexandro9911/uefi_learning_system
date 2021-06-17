import React from "react";
import Modal_tasks from "../../modals/modal_tasks";
import Modal_test from "../../modals/modal_test";
import TeacherTestPage from "./teacherTestPage";

export default class ListTests extends React.Component {
    constructor(props) {
        super(props);

        this.onClickGroup = this.onClickGroup.bind(this);
    }

    async onClickGroup(e){
        this.props.setActionModal(true);
        this.props.setGroupSelection(e.target.value);
        let answ = "";
        let resp = await fetch("http://localhost/uefi_learning_system/selectTestsForGroups.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                group_id: e.target.value,
                myid: this.props.myId
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        let arr = Object.values(answ);
         this.props.setList(arr)
    }

    render() {
        let groups = this.props.groups;
        let q = groups.length;
        if(q > 0){
            const items = groups.map((group,i) =>
                <div key={i} className="group_card">
                    <b>Группа: {group.title}</b>
                    <div>Токен: {group.token}</div>
                    <div>Описание: {group.descr}</div>
                    <button value={group.id} onClick={this.onClickGroup} className="btn btn-sm btn-outline-primary">
                        Отобразить тестовые задания группы
                    </button>
                    <Modal_test
                        status={this.props.status}
                        ena_tests={this.props.ena_tests}
                        group_id={group.id}
                        group_tests={this.props.group_tests}
                        selected={this.props.selected_group}
                        list_results={this.props.list_results}
                        setResultsOfGroup={this.props.setResultsOfGroup}
                        actionTestResults={this.props.actionTestResults}
                    />
                </div>);
            return (
                <div>{items}</div>
            )
        }
        return (
            <div>У вас нет групп</div>
        )
    }
}