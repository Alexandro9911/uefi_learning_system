import React from "react";

export default class  EmulatorInput extends React.Component {
    constructor(props) {
        super(props);

        this.onChnageValue = this.onChnageValue.bind(this);
    }

    onChnageValue(e){
        this.props.action(e.target.value);
    }

    render() {
        let ena_value = this.props.ena_value;
        let curr_ena_value = this.props.curr_ena_value;
        if (ena_value === curr_ena_value) {
            return (
                <input className="modal-inputs"
                       value={this.props.value}
                       onChange={this.onChnageValue}
                />
            )
        } else {
            return (
                <input className="modal-inputs" disabled={true}
                       value={this.props.value}
                />
            )
        }
    }
}