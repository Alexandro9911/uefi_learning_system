import React from "react";
import AdvancedNavBar from "./advancedNavBar";
import ToolsContainer from "../../../containers/emulator/advancedContainers/toolsContainer";
import MonitorContainer from "../../../containers/emulator/advancedContainers/monitorContainer";
import BootContainer from "../../../containers/emulator/advancedContainers/bootContainer";
import AdvancedPageContainer from "../../../containers/emulator/advancedContainers/advancedPageContainer";
import AiTweakerContainer from "../../../containers/emulator/advancedContainers/aiTweakerContainer";
import MainPageContainer from "../../../containers/emulator/advancedContainers/mainPageContainer";

export default class AdvancedModePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.current_select) {
            case 'main':
                return (
                    <div>
                        <AdvancedNavBar/>
                        <MainPageContainer/>
                    </div>
                )
            case 'ai':
                return (
                    <div>
                        <AdvancedNavBar/>
                        <AiTweakerContainer/>
                    </div>
                )
            case 'advanced':
                return (
                    <div>
                        <AdvancedNavBar/>
                        <AdvancedPageContainer/>
                    </div>
                )
            case 'boot':
                return (
                    <div>
                        <AdvancedNavBar/>
                        <BootContainer/>
                    </div>
                )
            case 'monitor':
                return (
                    <div>
                        <AdvancedNavBar/>
                        <MonitorContainer/>
                    </div>
                )
            case 'tools':
                return (
                    <div>
                        <AdvancedNavBar/>
                        <ToolsContainer/>
                    </div>
                )
        }

    }
}