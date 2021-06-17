import React from "react";

export default class AlertModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClickAccept = this.onClickAccept.bind(this);
        this.onClickDenie = this.onClickDenie.bind(this);
    }

    onClickAccept(){

    }

    onClickDenie() {

    }

    render() {
        return (
            <div className="alertModal">
                <div>Вы не завершили действие. Текущий прогресс и результаты будут утеряны!</div>
                <div className="flex_btn">
                    <button className='btn btn-sm btn-outline-primary' onClick={this.onClickAccept}>Да</button>
                    <button className='btn btn-sm btn-outline-danger' onClick={this.onClickDenie}>Нет</button>
                </div>
            </div>
        )
    }
}