import React from "react";

export default class Modal_test_results extends React.Component {
    constructor(props) {
        super(props);

        this.onClickClose = this.onClickClose.bind(this);
    }

    onClickClose(e){
        this.props.actionTestResults(false);
    }

    render() {
        if(this.props.status){
            if(this.props.list_results.length !== 0){
                let results = this.props.list_results;
                const items = results.map((res,i) =>
                <div className="flex_simple">
                    <div>ФИО: {res.last_name} {res.first_name} {res.middle_name}</div>
                    <div> Балл: {res.points}</div>
                </div>
                );
                return(
                    <div>
                        <div>{items}</div>
                        <div className="btn btn-sm btn-outline-primary" onClick={this.onClickClose}>Закрыть</div>
                    </div>
                )
            } else {
                return(
                    <div>Пусто</div>
                )
            }
        } else {
            return (
                <div></div>
            )
        }
    }
}