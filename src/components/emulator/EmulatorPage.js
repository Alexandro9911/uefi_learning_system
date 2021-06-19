import React from "react";
import InfoBarContainer from "../../containers/emulator/infoBarContainer";
import EzModeContainer from "../../containers/emulator/ezModeContainer";
import AdvancedModeContainer from "../../containers/emulator/advancedModeContainer";
import WarningModal from "../modals/warning_modal";


export default class EmulatorPage extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        console.log("em page : " +JSON.stringify(this.props.emulator_object))
        return (
            <div className="emulator_container">
                <div className="background_emulator">
                    <InfoBarContainer/>
                    <WarningModal
                        modal_warning={this.props.modal_warning}
                        modal_warning_text={this.props.modal_warning_text}
                        actionModalWarning={this.props.actionModalWarning}

                    />
                    <EzModeContainer emulator_status={this.props.emulator_status}/>
                    <AdvancedModeContainer emulator_status={this.props.emulator_status}/>
                </div>
            </div>
        )
    }
}