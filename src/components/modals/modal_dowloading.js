import React from "react";

export default class Modal_dowloading extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(e){
        this.props.hideModalDownloading();
    }

    render() {
        if(this.props.modal_downloading_status) {
            return (
                <div className="modal_downloading">
                    <div className="align-content-center">
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                    <span>Loading...</span>
                    <button onClick={this.onClickHandler}>ок</button>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}