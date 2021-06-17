import React from "react";

export default class DdrSettings extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandlerOpen = this.onClickHandlerOpen.bind(this);
        this.onClickHandlerClose = this.onClickHandlerClose.bind(this);
    }

    onClickHandlerOpen() {
        this.props.setPageAdvancedAccordion('none')
        this.props.setPageAdvancedAccordion('ddr');
    }

    onClickHandlerClose(){
        this.props.setPageAdvancedAccordion('none')
    }

    render() {
        if(this.props.page_advanced_accordion === 'ddr'){
            return(
                <div onClick={this.onClickHandlerClose}>
                    <div className="button_adv_item">
                        <h5>RAM settings v</h5>
                    </div>
                    <div>[Object object]</div>
                </div>
            )
        } else {
            return (
                <div className="button_adv_item" onClick={this.onClickHandlerOpen}>
                    <h5>RAM settings ></h5></div>
            )
        }
    }
}