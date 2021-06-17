import React from "react";
import Modal_test_results from "./modal_test_results";

export default class Modal_test extends React.Component {
    constructor(props) {
        super(props);

        this.onClickButtonResults = this.onClickButtonResults.bind(this);
    }

    async onClickButtonResults(e){
        let answ = "";
        let resp = await fetch("http://localhost/uefi_learning_system/selectResultsOfTest.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                test_id: e.target.value,
                group_id: this.props.group_id
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        this.props.setResultsOfGroup(JSON.parse(JSON.stringify(answ)))
        this.props.actionTestResults(true);
    }

    render() {
        if(this.props.ena_tests && this.props.group_id === this.props.selected) {
            if(Object.values(this.props.group_tests).length !== 0) {
                let tests = Object.values(this.props.group_tests)
                let q = tests.length
                const items = tests.map((test,i) =>
                    <div key={i} className="group_card">
                        <div>Тема теста: {test.theme}</div>
                        <button className="btn btn-sm btn-outline-primary"
                                value={test.id}
                                onClick={this.onClickButtonResults}
                        >Посмотреть результаты</button>
                        <Modal_test_results
                            status={this.props.status}
                            actionTestResults={this.props.actionTestResults}
                            list_results={this.props.list_results}
                        />
                    </div>);
                return ( 
                    <div>{items}</div>
                )
            } else {
                return (
                    <div>У этой группы нет тестов. Самое время их создать!</div>
                )
            }
        } else {
            return (<div></div>)
        }
    }
}