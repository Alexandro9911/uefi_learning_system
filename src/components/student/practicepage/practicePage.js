import React from "react";
import {Link} from "react-router-dom";
import {setCurrentPractice} from "../../../store/practice_student/actions";

export default class PracticePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const practice = this.props.listPractice;
        let q = practice.length;
        if(q > 0) {
            const items = practice.map((prac,i) =>
                <div key={i} className="group_card"
                     onMouseEnter={async function() {
                         this.props.setCurrentPractice(+prac.id);
                    }.bind(this)}
                     onMouseLeave={async function() {
                         this.props.setCurrentPractice(null);
                     }.bind(this)}>
                    <b>{prac.theme}</b>
                    <div>Группа: {prac.group_title}</div>
                    <div>Владелец: {prac.ovner_lastname} {prac.ovner_firstname} {prac.ovner_middlename}</div>
                    <div className="flex_btn">
                        <Link to={'/user_page/practice_page/about_task'} className="btn btn-sm btn-outline-primary">Выполнять</Link>
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