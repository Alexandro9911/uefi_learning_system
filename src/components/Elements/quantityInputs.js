import React from "react";

export default class QuantityInputs extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeValue = this.onChangeValue.bind(this);

    }

    onChangeValue(e){
        let arr = []
        for (let i = 0; i < this.props.array_values.length; i++){
            if(i=== this.props.curr_index){
                arr.push(+e.target.value);
            } else {
                arr.push(this.props.array_values[i]);
            }
        }
        this.props.setArray(arr);
    }

    render() {
        let quantity = this.props.array_values.length;
        let ena = this.props.ena;
        let items = []
        if(ena === 'per core') {
            let counter = 0;
            for (let i = 0; i < quantity * 2; i++) {
                if (i % 2 !== 0) {
                    let index = counter
                    items.push(
                        <input className="modal-inputs"
                               onMouseEnter={async function (){
                                   this.props.setCurrIndex(index);
                               }.bind(this)}
                               onChange={this.onChangeValue}
                        />
                    )
                    counter++;
                } else {
                    items.push(
                        <h5>{i /2  + 1}-core ratio limit</h5>
                    )
                }
            }
        } else {
            for (let i = 0; i < quantity * 2; i++) {
                if (i % 2 !== 0) {
                    items.push(
                        <input className="modal-inputs"
                               value={this.props.value}
                        />
                    )
                } else {
                    items.push(
                        <h5 className="text-muted">{i /2 + 1}-core ratio limit</h5>
                    )
                }
            }
        }
        return (
            <div className="grid_layout">
                {items}
            </div>
        )
    }
}