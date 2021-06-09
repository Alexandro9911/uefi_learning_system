import React from "react";
export default class BootPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container_bios">
                <h5 className="text-muted">Boot configuration</h5>
                <div className="grid_layout">
                    <h5>Быстрая загрузка</h5>
                    <select className="modal-select">
                        <option selected={true}>[Enabled]</option>
                        <option>[Enabeled]</option>
                    </select>
                    <h5>Быстрая загрузка после сбоя питания</h5>
                    <select className="modal-select">
                        <option selected={true}>[Нормальная загрузка]</option>
                        <option>[Enabeled]</option>
                    </select>
                </div>
                <br/>
                <h5 className="text-muted">Приоритет загрузки</h5>
                <div className="grid_layout">
                    <h5>Boot option #1</h5>
                    <select className="modal-select">
                        <option selected={true}>[SATA6G_1: HDD drive 0000000011]</option>
                        <option>[Enabeled]</option>
                    </select>
                    <h5>Boot option #2</h5>
                    <select className="modal-select">
                        <option selected={true}>[HDD drive 1233450004]</option>
                        <option>[Enabeled]</option>
                    </select>
                </div>
                <br/>
                <div className="simple-button">secure boot</div>
                <br/>
                <h5>Boot override</h5>
                <h5></h5>
                <h5></h5>
                <h5></h5>
                <h5></h5>
            </div>
        )
    }
}