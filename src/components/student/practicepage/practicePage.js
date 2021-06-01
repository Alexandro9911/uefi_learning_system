import React from "react";
import {Link} from "react-router-dom";
import {setCurrentPractice} from "../../../store/practice_student/actions";

export default class PracticePage extends React.Component {
    constructor(props) {
        super(props);

        this.onClickPractice = this.onClickPractice.bind(this);
        this.onClickPracticeStart = this.onClickPracticeStart.bind(this);
        this.setPractice = this.setPractice.bind(this);
    }

    onClickPracticeStart(e){
        let c = window.sessionStorage.getItem('id_task');
        if(c === 'null') {
            this.props.setCurrentPractice(null);
        } else {
            this.props.setCurrentPractice(+c);
        }
    }

    onClickPractice(e) {

    }

    setPractice(id,c){
    }

    render() {
        const practice = this.props.listPractice;
        let q = practice.length;
        if(q > 0) {
            const items = practice.map((prac,i) =>
                <div key={i} className="group_card"
                     onMouseOver={async function() {
                         this.props.setCurrentPractice(+prac.id);
                    }.bind(this)}
                     onMouseOut={async function() {
                         this.props.setCurrentPractice(null);
                     }.bind(this)}>
                    <b>{prac.theme}</b>
                    <div>Группа: {prac.group_title}</div>
                    <div>Владелец: {prac.ovner_lastname} {prac.ovner_firstname} {prac.ovner_middlename}</div>
                    <div className="flex_btn">
                            <button className="btn btn-sm btn-outline-primary" onClick={this.onClickPracticeStart}> Выполнять</button>
                        <button className="btn btn-sm btn-outline-primary">Подробнее</button>
                    </div>
                </div>);
            return (
                <div className="join_page">
                    <h6>Практические задания</h6>
                    <br/>
                    <div>{items}</div>
                </div>
            )
        } else {
            return (
                <div className="join_page">
                    <h6>Практические задания</h6>
                    <h6> no groups</h6>
                </div>
            )
        }
    }
}