import React from "react";

export default class TestWindow extends React.Component {
    constructor(props) {
        super(props);
        this.onCLoseTestClick = this.onCLoseTestClick.bind(this);
        this.onChangeAnswers = this.onChangeAnswers.bind(this);
        this.onSaveTest = this.onSaveTest.bind(this);

    }

    onCLoseTestClick(){
        this.props.finishTest()
    }

    onChangeAnswers(e){
        this.props.curr_list_answers[this.props.curr_answer] = e.target.value;
    }

    async onSaveTest(){
        let answ = "";
        let resp = await fetch("http://localhost/uefi_learning_system/checkTest.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                myId: this.props.myId,
                test_id: this.props.selected_id,
                results: JSON.stringify(this.props.curr_list_answers)
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        this.props.setTestResult(JSON.parse(JSON.stringify(answ)));
        this.props.finishTest();
        this.props.actionEnaResult(true)
    }



    render() {
        const questions = this.props.curr_list_quest
        const answers = this.props.curr_list_answers
        const items = questions.map((quest, i) =>
        <div className="group_card">
            <b>Вопрос № {i+1}:</b>
            <div>{quest}</div>
            <input type="text" className="form-control" id="exampleFormControlInput1"
                   placeholder="Ответ"
                onMouseEnter={async function() {
                    this.props.setCurrAnswer(i);
                }.bind(this)}
                onChange={this.onChangeAnswers}
                 key={i}
            />
        </div>
        )
        return (
            <div className="join_page">
                <h5>Выполнение тестового задания</h5>
                <div className="dropdown-divider"/>
                <div>{items}</div>
                <div className="flex_simple">
                    <button className="btn btn-sm btn-outline-danger"
                            onClick={this.onCLoseTestClick}>
                        Закрыть
                    </button>
                    <button className="btn btn-sm btn-outline-success"
                            onClick={this.onSaveTest}>
                        Сохранить и проверить
                    </button>
                </div>
            </div>
        )
    }
}