import React from "react";

export default class DynamicInputHdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            satas: this.props.board.quantity_sata
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.updateHDDList = this.updateHDDList.bind(this);
    }

    onChangeValue(e){
        if(+e.target.value <= +this.state.satas){
            this.props.setQuantityHDD(e.target.value);
            this.setState({error: ''});

            this.updateHDDList()

        } else {
            let elem = document.getElementById('error_label');
            elem.style.color = 'red'
            this.setState({error: 'Введено недопустимое количество.' +
                    ' Подсказка: количество подключений для этой материнской платы: ' +this.state.satas})
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
            alert("here");
            this.props.setDynamicHDD(array);
        }
    }

    render() {
        return (
            <div>
                <div className="row g-3">
                    <div className="col w-25">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Количество носителей информации</label>
                        <input type="text" className="form-control" placeholder="Количество носителей информации"
                               aria-label="First name"
                               onChange={this.onChangeValue}
                               value={this.props.quantity_hdd}
                        />
                        <label id="error_label">{this.state.error}</label>
                    </div>
                </div>
            </div>
        );
    }
}