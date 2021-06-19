import React from "react";

export default class ListPracticeRes extends React.Component {
    constructor(props) {
        super(props);
    }
    getStatus(value){
        if(value === '0'){
            return "Не начато"
        } else {
            return "Начато"
        }
    }

    render() {
        const list = this.props.list_results;
        const items = list.map((res,i) =>
            <div>
                <div className="flex_simple">
                    <div>ФИО :</div>
                    <div>{res.last_name} {res.first_name} {res.middle_name}</div>
                    <div className="btn btn-sm btn-outline-dark" onClick={(event) => {
                        this.props.actionResultsPage(true);
                        this.props.setPracticeResult(list[i]);
                    }}>Результат</div>
                    <div>Статус: {this.getStatus(res.was_started)}</div>
                </div>
                <div className="dropdown-divider"/>
            </div>
        );
        return(
            <div>
                Результаты группы:
                <div className="dropdown-divider"/>
                <div>{items}</div>
                <br/>
                <div className="btn btn-sm btn-outline-primary" onClick={ (event) => {this.props.actionEnaListRes(false)}}>Прекратить просмотр</div>
            </div>
        )
    }
}