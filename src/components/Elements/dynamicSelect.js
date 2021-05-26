import React from "react";

export default class DynamicSelect extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e){
        let id = e.target.value;
        let arr = Object.values(this.props.groups);
        let title = "";
        for(let i = 0; i < arr.length; i++){
            if(arr[i].id === id){
                title = arr[i].title
            }
        }
        this.props.setGroup(id,title);
    }

    render() {
        // из пропсов отрисовать значение
        const groups = Object.values(this.props.groups);
        let q = groups.length;
        if (q > 0) {
            let items;
            items = Object.values(this.props.groups).map((group, i) =>
                <option value={group.id} key={i}>{group.title}</option>
            );
            return (
                <select className="form-select" aria-label="Default select example"
                        value={this.props.group_id}
                        onChange={this.onChangeValue}
                        required={true}>
                    {items}
                </select>
            )
        }
    }
}