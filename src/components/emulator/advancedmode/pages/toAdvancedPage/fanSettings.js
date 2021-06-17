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
                <div>
                    <div className="button_adv_item" onClick={this.onClickHandlerClose}>
                        <h5>Cooling system v</h5>
                    </div>
                    <div className="grid_layout">
                        <h5>Fan mode</h5>
                        <select className="modal-select">
                            <option selected={true}>[AUTO]</option>
                            <option>[MANUAL]</option>
                        </select>
                        <h5>Manual Fan speed</h5>
                        <select className="modal-select">
                            <option selected={true}>[Optimal]</option>
                            <option>[FAST]</option>
                            <option>[SLOW]</option>
                        </select>
                    </div>
                    <div className="grid_layout">
                        <h5>List Fans</h5>
                    </div>
                    <div className="text-muted">
                    <h5>CPU Fan  {this.props.cpu_fan_speed} RPM</h5>
                    <h5>FAN 1 :  N/A</h5>
                    <h5>FAN 2 :  N/A</h5>
                    <h5>FAN 3 :  N/A</h5>
                    </div>
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