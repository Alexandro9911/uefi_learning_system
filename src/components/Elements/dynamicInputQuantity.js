import React from "react";

export default class DynamicInputQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            board: this.props.motherboard
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    componentDidMount() {
        this.props.setQuantityHDD(1);
    }

    onChangeValue(e) {
        if (this.props.mode === 0) {
            if (+e.target.value <= +this.props.motherboard.quantity_sata) {
                this.props.setQuantityHDD(+e.target.value);
                this.setState({error: ''});
                this.props.setSelectsEnabled()
            } else {
                this.props.setQuantityHDD(+e.target.value);
                let elem = document.getElementById('error_label');
                elem.style.color = 'red'
                this.setState({
                    error: 'Введено недопустимое количество.' +
                        ' Подсказка: количество подключений для этой материнской платы: ' + this.props.motherboard.quantity_sata
                })
                this.props.setSelectsDisabled()
            }
        } else {
            if (+e.target.value <= +this.props.motherboard.quantity_ddr_ports) {
                this.props.setQuantityHDD(+e.target.value);
                this.setState({error: ''});
                this.props.setSelectsEnabled()
            } else {
                this.props.setQuantityHDD(+e.target.value);
                let elem = document.getElementById('error_label1');
                elem.style.color = 'red'
                this.setState({
                    error: 'Введено недопустимое количество.' +
                        ' Подсказка: количество подключений для этой материнской платы: ' + this.props.motherboard.quantity_ddr_ports
                })
                this.props.setSelectsDisabled()
            }
        }
    }


    render() {
        if (this.props.status) {
            // eslint-disable-next-line default-case
            switch (this.props.mode) {
                case 0:
                    return (
                        <div>
                            <div className="row g-3">
                                <div className="col w-25">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Количество
                                        носителей
                                        информации</label>
                                    <input type="text" className="form-control"
                                           placeholder="Количество носителей информации"
                                           aria-label="First name"
                                           onChange={this.onChangeValue}
                                           value={this.props.quantity_hdd}
                                    />
                                    <label id="error_label">{this.state.error}</label>
                                </div>
                            </div>
                        </div>
                    );
                case 1:
                    return (
                        <div>
                            <div className="row g-3">
                                <div className="col w-25">
                                    <label htmlFor="exampleFormControlTextarea2" className="form-label">Количество
                                        плашек оперативной памяти</label>
                                    <input type="text" className="form-control"
                                           placeholder="Количество носителей информации"
                                           aria-label="First name"
                                           onChange={this.onChangeValue}
                                           value={this.props.quantity_hdd}
                                    />
                                    <label id="error_label1">{this.state.error}</label>
                                </div>
                            </div>
                        </div>
                    );
            }
        } else {
            return (<div></div>)
        }
    }
}