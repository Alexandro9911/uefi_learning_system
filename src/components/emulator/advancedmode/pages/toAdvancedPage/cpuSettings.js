import React from "react";

export default class CpuSettings extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandlerOpen = this.onClickHandlerOpen.bind(this);
        this.onClickHandlerClose = this.onClickHandlerClose.bind(this);
    }

    onClickHandlerOpen() {
        this.props.setPageAdvancedAccordion('none')
        this.props.setPageAdvancedAccordion('cpu');
    }

    onClickHandlerClose(){
        this.props.setPageAdvancedAccordion('none')
    }

    render() {
        if(this.props.page_advanced_accordion === 'cpu'){
            return(
                <div onClick={this.onClickHandlerClose}>
                    <div className="button_adv_item">
                        <h5>CPU settings v</h5>
                    </div>
                    <div>[Object object]</div>
                </div>
            )
        } else {
            return (
                <div className="button_adv_item" onClick={this.onClickHandlerOpen}>
                    <h5>CPU settings ></h5></div>
            )
        }
    }
}