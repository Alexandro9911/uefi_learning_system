import React from "react";

export default class DynamicSelectMemory extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeValue = this.onChangeValue.bind(this);
    }


    onChangeValue(e){
        let str = e.target.value
        let values = str.split("#");

        let index_select = values[0];
        let index_item = values[1];
        let arr = []
        for(let i = 0; i < this.props.quantity; i++){
            arr.push(this.props.list[i]);
        }

        for(let index_list = 0; index_list < this.props.dynamicList.length; index_list++){
            let partition = this.props.dynamicList[index_list];
            if(partition.id === index_item){
                arr[index_select] = partition
            }
        }
        this.props.set(arr);
    }

    render() {
        if (this.props.ena_create_selects) {
            // из пропсов отрисовать значение
            const hdds = Object.values(this.props.dynamicList);
            let q = hdds.length;
            let selects = [];
            if (this.props.quantity > 0) {
                for (let ind = 0; ind < this.props.quantity; ind++) {
                    let items;
                    items = Object.values(hdds).map((hdd, i) =>
                        <option value={"" + ind + "#" + hdd.id} key={i}>{hdd.name}</option>
                    );
                    let select = (
                        <select key={ind} className="form-select" aria-label="Default select example"
                                onChange={this.onChangeValue}
                        >
                            {items}
                        </select>);
                    selects.push(select)
                }
                return (
                    <form key={this.props.mode}>
                        <div>{selects}</div>
                    </form>)
            } else return (<div></div>)
        } else {
            return (<div></div>)
        }

    }
}