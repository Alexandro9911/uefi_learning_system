import React from "react";
import BootPriority from "./BootPriority";

export default class BootMenu extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let listHdd = this.props.emulator_object.listHdd
        return(
            <BootPriority listHdd={listHdd}/>
        )
    }
}