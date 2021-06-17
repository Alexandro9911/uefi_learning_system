import React from "react";

export default class EmulatorSelect extends React.Component{
    constructor(props) {
        super(props);
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e){
        this.props.action(e.target.value)
    }

    render() {
        const partial_values = this.props.partial_values;
        const curr_selected= this.props.curr_selected;
        let items = [];
        for(let i = 0; i < partial_values.length; i++){
            if(partial_values[i] === curr_selected){
                items.push(
                    <option value={curr_selected} selected={true}>
                        [{curr_selected}]
                    </option>)
            } else {
                items.push(
                    <option value={partial_values[i]}>[{partial_values[i]}]</option>
                )
            }
        }
        if(this.props.enabled){
            return (
                <select className="modal-select" onChange={this.onChangeValue}>
                    {items}
                </select>
            )
        } else {
            return (
                <select className="modal-select" disabled={true}>
                    {items}
                </select>
            )
        }
    }
}