import React from "react";

export default class FanSettings extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandlerOpen = this.onClickHandlerOpen.bind(this);
        this.onClickHandlerClose = this.onClickHandlerClose.bind(this);
    }

    onClickHandlerOpen() {
        this.props.setPageAdvancedAccordion('none')
        this.props.setPageAdvancedAccordion('fan');
    }

    onClickHandlerClose(){
        this.props.setPageAdvancedAccordion('none')
    }

    render() {
        if(this.props.page_advanced_accordion === 'fan'){
            return(
                <div onClick={this.onClickHandlerClose}>
                    <div className="button_adv_item">
                        <h5>Cooling system v</h5>
                    </div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            )
        } else {
            return (
                <div className="button_adv_item" onClick={this.onClickHandlerOpen}>
                    <h5>Cooling system ></h5></div>
            )
        }
    }
}