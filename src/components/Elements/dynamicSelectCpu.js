import React from "react";

export default class DynamicSelectCpu extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeValue = this.onChangeValue.bind(this);
        //   this.updateCPUList = this.updateCPUList.bind(this);
    }

    onChangeValue(e) {
        let id = e.target.value;
        const cpus = this.props.listCPU
        let c;
        for (let i = 0; i < Object.values(cpus).length; i++) {
            let partial_cpu = cpus[i];
            if (partial_cpu.id === id) {
                this.props.setCpu(partial_cpu);
                c = partial_cpu
                break;
            }
        }
    }

    // async updateCPUList(board){
    //     let answ = '';
    //     let resp = await fetch("http://localhost/uefi_learning_system/selectCpyByCriteria.php", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    //         },
    //         body: new URLSearchParams({
    //             board : this.props.motherboard
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(result => answ = result)
    //     let array= [];
    //     for(let i = 0; i <answ.length; i++){
    //         array.push(answ[i]);
    //     }
    //     if(array.length > 0){
    //         this.props.setCpuInputEnabled();
    //         this.props.setDynamicCPU(array);
    //     } else {
    //         this.props.setCpuInputDisabled();
    //     }
    // }

    render() {
        if (this.props.ena_cpu_input) {
            // из пропсов отрисовать значение
            const cpus = this.props.listCPU;
            let q = cpus.length;
            if (q > 0) {
                let items;
                items =cpus.map((cpu, i) =>
                    <option value={cpu.id} key={i}>{cpu.name} {cpu.system_name}</option>
                );
                return (
                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Выберите процессор:
                        </label>
                        <select className="form-select" aria-label="Default select example"
                                value={this.props.cpu.id}
                                onChange={this.onChangeValue}
                                required={true}>
                            {items}
                        </select>
                    </div>
                );
            }
        } else {
            return (
                <div>
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Выберите процессор:
                    </label>
                    <select className="form-select" aria-label="Default select example"
                            value={this.props.cpu.id}
                            onChange={this.onChangeValue}
                            required={true}
                            disabled={true}
                    >
                    </select>
                </div>
            );
        }
    }
}