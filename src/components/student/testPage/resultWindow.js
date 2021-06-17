import React from "react";

export default class ResultWindow extends React.Component {
    constructor(props) {
        super(props);

        this.onCloseResults = this.onCloseResults.bind(this);
    }

    onCloseResults() {
        this.props.actionEnaResult(false);
    }

    render() {
        let mark = this.props.result.mark

        let true_test = JSON.parse(this.props.result.right);
        let user_answers = JSON.parse(this.props.result.answ);
        let arr_css = [];
        for(let i = 0; i < true_test.length; i++){
            if(true_test[i]['answ'] === user_answers[i]){
                arr_css.push("group_card_green")
            } else {
                arr_css.push("group_card_red")
            }
        }
        const items = true_test.map((quest, i) =>
            <div className={arr_css[i]}>
                <b>Вопрос № {i+1}:</b>
                <div>{quest.quest}</div>
                <input type="text" className="form-control"
                       placeholder="Ответ"
                       disabled={true}
                       key={i}
                       value={user_answers[i]}
                       id={"item"+i}
                />
                <div>Верный ответ: {true_test[i]['answ']}</div>
            </div>
        );
        return (
            <div className="join_page">
                <h5>Результат: {mark}</h5>
                <div className="dropdown-divider"/>
                <div>{items}</div>
                <button className="btn btn-sm btn-outline-primary" onClick={this.onCloseResults}>Закрыть</button>
            </div>
        )
    }
}