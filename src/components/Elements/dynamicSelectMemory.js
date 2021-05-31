import React from "react";

export default class DynamicSelectMemory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array_inputs: this.props.dynamicListHdd
        }
        this.onChangeHdd = this.onChangeHdd.bind(this);
    }


    onChangeHdd(e){
        let str = e.target.value
        let values = str.split("#");

        let index_select = values[0];
        let index_item = values[1];
        let arr = []
        for(let i = 0; i < this.props.quantity_hdd; i++){
            arr.push(this.props.listHdd[i]);
        }

        for(let index_list = 0; index_list < this.props.dynamicListHdd.length; index_list++){
            let partition = this.props.dynamicListHdd[index_list];
            if(partition.id === index_item){
                arr[index_select] = partition
            }
        }
         let finalind = 0;
        this.props.setHDD(finalind,arr,this.props.dynamicListHdd.length);
    }

    render() {
        if (this.props.ena_create_selects) {
            // из пропсов отрисовать значение
            const hdds = Object.values(this.props.dynamicListHdd);
            let q = hdds.length;
            let selects = [];
            if (this.props.quantity_hdd > 0) {
                for (let ind = 0; ind < this.props.quantity_hdd; ind++) {
                    let items;
                    items = Object.values(hdds).map((hdd, i) =>
                        <option value={"" + ind + "#" + hdd.id} key={i}>{hdd.name}</option>
                    );
                    let select = (
                        <select key={ind} className="form-select" aria-label="Default select example"
                                onChange={this.onChangeHdd}
                        >
                            {items}
                        </select>);
                    selects.push(select)
                }
                return (
                    <form>
                        <div>{selects}</div>
                    </form>)
            } else return (<div></div>)
        } else {
            return (<div></div>)
        }

    }
}