import React from "react";

export default class WarningModal extends React.Component {
    constructor(props) {
        super(props);

        this.onCloseClick = this.onCloseClick.bind(this);
    }

    onCloseClick(e){
        this.props.actionModalWarning(false);
    }

    render() {
        if(this.props.modal_warning) {
            return (
                <div className="warning-alert-container">
                    <div className="warning-alert-body">
                        <div>{this.props.modal_warning_text}</div>
                        <button className="warnind-alert-button" onClick={this.onCloseClick}>Закрыть</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}