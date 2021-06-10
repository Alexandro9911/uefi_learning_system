import React from "react";
export default class BootPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container_bios">
                <h5 className="text-muted">Boot configuration</h5>
                <div className="grid_layout">
                    <h5>Fast setup</h5>
                    <select className="modal-select">
                        <option selected={true}>[Enabled]</option>
                        <option>[Enabeled]</option>
                    </select>
                    <h5>Fast setup after electricity shutdown</h5>
                    <select className="modal-select">
                        <option selected={true}>[normal]</option>
                        <option>[Enabeled]</option>
                    </select>
                </div>
                <br/>
                <h5 className="text-muted">Boot priority</h5>
                <div className="grid_layout">
                    <h5>Boot option #1</h5>
                    <select className="modal-select">
                        <option selected={true}>[SATA6G_1: SEDC450R/480G]</option>
                        <option>[Enabeled]</option>
                    </select>
                    <h5>Boot option #2</h5>
                    <select className="modal-select">
                        <option selected={true}>[SEDC450R/480G]</option>
                        <option>[Enabeled]</option>
                    </select>
                </div>
                <br/>
                {/*<div className="simple-button">secure boot</div>*/}
                <br/>
                <h5>Boot override</h5>
                <h5>#1 SATA6G_1: SEDC450R/480G</h5>
                <h5>#2 SATA6G_2: SEDC450R/480G</h5>
                <h5>#3 SATA6G_3: SEDC450R/480G</h5>
                <h5>#4 SATA6G_4: SEDC450R/480G</h5>
                <h5>#5 USB: USB flash drive</h5>

            </div>
        )
    }
}