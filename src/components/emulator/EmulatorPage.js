import React from "react";
import InfoBarContainer from "../../containers/emulator/infoBarContainer";


export default class EmulatorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="emulator_container">
                <div className="background_emulator">
                    <InfoBarContainer/>
                </div>
            </div>
        )
    }
}