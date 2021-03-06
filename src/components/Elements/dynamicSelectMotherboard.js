import React from "react";

export default class DynamicSelectMotherboard extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeValue = this.onChangeValue.bind(this);
        this.updateCPUList = this.updateCPUList.bind(this);
        this.updateHDDList = this.updateHDDList.bind(this);
    }

    onChangeValue(e) {
        let id = e.target.value;
        const boards = this.props.dynamicMotherboardList
        let b;
        for (let i = 0; i < Object.values(boards).length; i++) {
            let partial_board = boards[i];
            if (partial_board.id === id) {
                this.props.setBoard(partial_board);
                b = partial_board
                break;
            }
        }
        this.updateCPUList(b)
        this.updateHDDList()
    }

    async updateCPUList(board) {
        let answ = '';
        let resp = await fetch("http://localhost/uefi_learning_system/selectCpyByCriteria.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                socket: board.processor_soket
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        let array = [];
        for (let i = 0; i < answ.length; i++) {
            array.push(answ[i]);
        }
        if (array.length > 0) {
            this.props.setDynamicCPU(array);
            this.props.setCpuInputEnabled();
        } else {
            this.props.setCpuInputDisabled();
        }
    }

    async updateHDDList() {
        let answ = '';
        let resp = await fetch("http://localhost/uefi_learning_system/selectHddByCriteria.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                myid: 1
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        let array = [];
        for (let i = 0; i < answ.length; i++) {
            array.push(answ[i]);
        }
        if (array.length > 0) {
            this.props.setDynamicHDD(array);
        }
    }

    render() {
        // ???? ?????????????? ???????????????????? ????????????????
        if(this.props.status) {
            const groups = this.props.dynamicMotherboardList;
            let q = groups.length;
            if (q > 0) {
                let items;
                items = Object.values(this.props.dynamicMotherboardList).map((board, i) =>
                    <option value={board.id} key={i}>{board.name} {board.system_name}</option>
                );
                return (
                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            ???????????????? ?????????????????????? ??????????:
                        </label>
                        <select className="form-select" aria-label="Default select example"
                                value={this.props.motherboard.id}
                                onChange={this.onChangeValue}
                                required={true}>
                            {items}
                        </select>
                    </div>
                );
            } else {
                return (
                    <div></div>
                )
            }
        } else {
            return (
                <div></div>
            )
        }
    }
}