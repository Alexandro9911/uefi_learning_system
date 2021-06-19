import React from "react";

export default class DdrElement extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ddr_container">
                <h5>{this.props.ddr.vendor_name} {this.props.ddr.ddr_type_value}</h5>
                <div className="grid_layout">
                    <h5 className="text-muted">Type</h5>
                    <h5 className="text-muted">{this.props.ddr.ddr_type_value}</h5>
                    <h5 className="text-muted">System_string</h5>
                    <h5 className="text-muted">{this.props.ddr.product_number}</h5>
                </div>
                <h5>Timings settings: </h5>
                <div className="grid_layout">
                    <h5>CAS</h5>
                    <input className="modal-inputs"
                        placeholder={this.props.ddr.cas}
                           onChange={ (event) =>
                               this.props.setTiming(
                                   +this.props.index,
                                   'cas',
                                   +event.target.value
                               )
                           }
                    />

                    <h5>RAS</h5>
                    <input className="modal-inputs"
                           placeholder={this.props.ddr.ras}
                           onChange={ (event) =>
                               this.props.setTiming(
                                   +this.props.index,
                                   'ras',
                                   +event.target.value
                               )
                           }
                    />
                    <h5>TRP</h5>
                    <input className="modal-inputs"
                           placeholder={this.props.ddr.trp}
                           onChange={ (event) =>
                               this.props.setTiming(
                                   +this.props.index,
                                   'trp',
                                   +event.target.value
                               )
                           }
                    />
                    <h5>TRAS</h5>
                    <input className="modal-inputs"
                           placeholder={this.props.ddr.tras}
                           onChange={ (event) =>
                               this.props.setTiming(
                                   +this.props.index,
                                   'tras',
                                   +event.target.value
                               )
                           }
                    />
                </div>
            </div>
        )
    }
}