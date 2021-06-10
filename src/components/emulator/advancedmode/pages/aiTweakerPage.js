import React from "react";
export default class AiTweakerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(){
       let obj =  this.props.emulator_object
    }

    render() {
        return (
            <div>
                <div className="container_bios">
                    <h5 className="text-colored">Target CPU Turbo-Mode Frequency: 3105 MHz</h5>
                    <h5 className="text-colored">Target DRAM Frequency: 2186 MHz</h5>
                    <h5 className="text-colored">Target Cache Frequency: 2997 MHz</h5>

                    <div className="warning-alert-container">
                        <div className="warning-alert-body">
                            Внимание! Температура достигла граничных значений.
                            Требуется поменять конфигурацию, так как система нестабильна.
                            <div className="warnind-alert-button">Закрыть</div>
                        </div>
                    </div>


                    <div className="grid_layout">
                        <h5>Ai Overclock tuner</h5>
                        <select className="modal-select">
                            <option selected={true}>[Manual]</option>
                            <option>[Enabeled]</option>
                        </select>
                        <h5>CPU core ratio</h5>
                        <select className="modal-select">
                            <option selected={true}>[Per core]</option>
                            <option>[Enabeled]</option>
                        </select>

                        <h5>1-core ratio limit</h5>
                        <input className="modal-inputs"/>
                        <h5>2-core ratio limit</h5>
                        <input className="modal-inputs"/>
                        <h5>3-core ratio limit</h5>
                        <input className="modal-inputs"/>
                        <h5>4-core ratio limit</h5>
                        <input className="modal-inputs"/>
                    </div>
                    <br/>
                    <div className="grid_layout">
                        <h5>DRAM odd Ratio Mode</h5>
                        <select className="modal-select">
                            <option selected={true}>[Enabled]</option>
                            <option>[Enabeled]</option>
                        </select>
                        <h5>Frequency DRAM</h5>
                        <select className="modal-select">
                            <option selected={true}>[DDR4-2186MHZ]</option>
                            <option>[Enabeled]</option>
                        </select>
                        <h5>CPU core ratio</h5>
                        <select className="modal-select">
                            <option selected={true}>[Per core]</option>
                            <option>[Enabeled]</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}