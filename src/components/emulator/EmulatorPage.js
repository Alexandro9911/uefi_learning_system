import React from "react";
import InfoBarContainer from "../../containers/emulator/infoBarContainer";
import EzModeContainer from "../../containers/emulator/ezModeContainer";
import AdvancedModeContainer from "../../containers/emulator/advancedModeContainer";


export default class EmulatorPage extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="emulator_container">
                <div className="background_emulator">
                    <InfoBarContainer/>
                    <EzModeContainer emulator_status={this.props.emulator_status}/>
                    <AdvancedModeContainer emulator_status={this.props.emulator_status}/>
                </div>
            </div>
        )
    }
}