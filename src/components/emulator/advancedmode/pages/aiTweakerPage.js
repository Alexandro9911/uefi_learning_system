import React from "react";
import EmulatorSelect from "../../../Elements/emulatorSelect";
import EmulatorInput from "../../../Elements/emulatorInput";
import QuantityInputs from "../../../Elements/quantityInputs";
import WarningModal from "../../../modals/warning_modal";
export default class AiTweakerPage extends React.Component {
    constructor(props) {
        super(props);

        this.singleCoreRatioLimit = this.singleCoreRatioLimit.bind(this);
    }


    singleCoreRatioLimit(e){

    }

    render() {
        let partial_arr = []
        if(this.props.mutiplayer_mode){
           partial_arr = ['auto','manual','disabled']
        } else {
            partial_arr = ['N/A']
        }
        return (
            <div>
                <div className="container_bios">
                    <h5 className="text-colored">Target CPU Turbo-Mode Frequency: {this.props.cpu_speed} MHz</h5>
                    <h5 className="text-colored">Target DRAM Frequency: 2186 MHz</h5>
                    <h5 className="text-colored">Target Cache Frequency: 2997 MHz</h5>

                    <div className="grid_layout">
                        <h5>Ai Overclock tuner</h5>
                        <EmulatorSelect
                            partial_values={partial_arr}
                            action={this.props.changeAImode}
                            curr_selected={this.props.ai_mode}
                            enabled={this.props.ai_mode}
                        />
                        <h5>CPU core ratio</h5>
                        <EmulatorSelect
                            partial_values={['auto','per core']}
                            action={this.props.changeMultiplayerTo}
                            curr_selected={this.props.changeMultiplayerTo}
                            enabled={this.props.mutiplayer_mode}
                        />
                    </div>
                    <div className="grid_layout">
                        <h5>Core ratio limit</h5>
                        <EmulatorInput
                        ena_value='auto'
                        curr_ena_value={this.props.multiplayer_to}
                        action={this.props.changeMultiplayer}
                        value={this.props.multiplayer}
                        />
                    </div>
                    <QuantityInputs
                        array_values={this.props.multiplayer_array}
                        ena={this.props.multiplayer_to}
                        value={this.props.multiplayer}
                        setArray={this.props.changeMultiplayerArr}
                        setCurrIndex={this.props.setCurrIndex}
                        curr_index={this.props.curr_index}
                    />
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