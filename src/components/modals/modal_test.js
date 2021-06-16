import React from "react";

export default class Modal_test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.ena_tests && this.props.group_id === this.props.selected) {
            if(Object.values(this.props.group_tests).length !== 0) {
                let tests = Object.values(this.props.group_tests)
                let q = tests.length
                const items = tests.map((test,i) =>
                    <div key={i} className="group_card">
                        <div>Тема теста: {test.theme}</div>
                        <div className="btn btn-sm btn-outline-primary">Посмотреть результаты</div>
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