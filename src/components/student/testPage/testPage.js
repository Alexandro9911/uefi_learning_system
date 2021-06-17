import React from "react";
import {Link} from "react-router-dom";

export default class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.onClickStart = this.onClickStart.bind(this);
    }

    onClickStart(e) {
        const index_test = e.target.value

        const test = this.props.list_test[index_test];

        const questions = JSON.parse(test['test_string']);
        let len = questions.length
        let answ_list = [];
        let quest_list = [];

        for (let i = 0;i < len; i++){
            answ_list.push("");
            let quest = questions[i]
            quest_list.push(quest['quest']);
        }
        this.props.setSelectedId(+test['test_id']);
        this.props.setListQuest(quest_list);
        this.props.setListAnsw(answ_list);
        this.props.startTest(e.target.value);
    }

    render() {
        if (!this.props.ena_screen_test) {
            let tests = this.props.list_test
            const items = tests.map((test, i) =>
                <div className="group_card" key={i}>
                    <div>{test.test_theme}</div>
                    <div>{test.group_title}</div>
                    <div>Состояние: {test.points}</div>
                    <button className="btn btn-sm btn-outline-primary"
                            value={i}
                            onClick={this.onClickStart}
                    >Выполнять
                    </button>
                </div>
            )
            return (
                <div className="join_page">
                    <Link className="btn btn-outline-primary" to={'/user_page'}>Назад</Link>
                    <div>{items}</div>
                </div>
            )
        } else {
            return  (
                <div>Тут пусто</div>
            )
        }
    }
}