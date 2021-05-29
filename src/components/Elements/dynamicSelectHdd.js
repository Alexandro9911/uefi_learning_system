import React from "react";

export default class DynamicSelectHdd extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // из пропсов отрисовать значение
        const hdds = Object.values(this.props.dynamicListHdd);
        let q = hdds.length;
        let selects = [];
        let variants = [{id: '1'},{id: '2'},{id: '3'}];
        if (this.props.quantity_hdd > 0) {
            for (let i = 0; i < this.props.quantity_hdd; i++) {
                let items;
                items = Object.values(hdds).map((hdd, i) =>
                    <option value={hdd.id} key={i}>{hdd.name}</option>
                );
                let select = (
                    <select key={i}
                            className="form-select" aria-label="Default select example">
                        {items}
                    </select>);
                selects.push(select)
            }
            return (
                <form>
                    <div>{selects}</div>
                    <button className="btn btn-sm btn-outline-primary">Сохранить значения дисков</button>
                </form>)
        } else return (<div></div>)
    }
}