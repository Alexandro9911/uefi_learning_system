import React from "react";

export default class Warning_modal extends React.Component {
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
                        {this.props.warning_modal_text}
                        <div className="warnind-alert-button" onClick={this.onCloseClick}>Закрыть</div>
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