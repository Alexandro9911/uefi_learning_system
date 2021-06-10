import React from "react";

export default class BootTools extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandlerOpen = this.onClickHandlerOpen.bind(this);
        this.onClickHandlerClose = this.onClickHandlerClose.bind(this);
    }

    onClickHandlerOpen() {
        this.props.setPageAdvancedAccordion('none')
        this.props.setPageAdvancedAccordion('boot');
    }

    onClickHandlerClose(){
        this.props.setPageAdvancedAccordion('none')
    }

    render() {
        if(this.props.page_advanced_accordion === 'boot'){
            return(
                <div>
                    <div className="button_adv_item" onClick={this.onClickHandlerClose}>
                        <h5>Boot settings v</h5>
                    </div>
                    <div className="grid_layout">
                        <h5>SATA mode</h5>
                        <select className="modal-select">
                            <option selected={true}>[AHCI]</option>
                            <option>[RAID]</option>
                        </select>
                    </div>
                    <div className="grid_layout">
                        <h5>Selected sata 0.0</h5>
                        <select className="modal-select">
                            <option selected={true}>[SEDC450R/480G]</option>
                            <option>[RAID]</option>
                        </select>
                        <h5>Selected sata 0.1</h5>
                        <select className="modal-select">
                            <option selected={true}>[SEDC450R/480G]</option>
                            <option>[RAID]</option>
                        </select>
                        <h5>Selected sata 0.2</h5>
                        <select className="modal-select">
                            <option selected={true}>[SEDC450R/480G]</option>
                            <option>[RAID]</option>
                        </select>
                        <h5>Selected sata 0.3</h5>
                        <select className="modal-select">
                            <option selected={true}>[SEDC450R/480G]</option>
                            <option>[RAID]</option>
                        </select>
                        <h5>Selected sata 0.1</h5>
                        <select className="modal-select">
                            <option selected={true}>[N\A]</option>
                            <option>[RAID]</option>
                        </select>
                        <h5>Selected sata 0.1</h5>
                        <select className="modal-select">
                            <option selected={true}>[N\A]</option>
                            <option>[RAID]</option>
                        </select>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="button_adv_item" onClick={this.onClickHandlerOpen}>
                    <h5>Boot settings ></h5></div>
            )
        }
    }
}