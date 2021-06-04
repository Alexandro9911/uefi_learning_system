import React from "react";
import MonitorMenu from "./monitorMenu";
import BootMenu from "./bootMenu";

export default class EzModePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MonitorMenu temperature={this.props.temperature}
                             setTemp={this.props.setTemp}/>
                <BootMenu/>
            </div>
        )
    }
}
