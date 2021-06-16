import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

class Registration extends Component {
    constructor(props) {
        super(props);

        this.familyChange = this.familyChange.bind(this);
        this.fatherNameChange = this.fatherNameChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwChange = this.passwChange.bind(this);
        this.repPasswChange = this.repPasswChange.bind(this);
        this.whoIAmChange = this.whoIAmChange.bind(this);
    }

    familyChange(e){

    }
    nameChange(e){

    }
    fatherNameChange(e){

    }

    emailChange(e){

    }

    passwChange(e){

    }
    repPasswChange(e){
        this.setState({rep_passw: e.target.value});
        let label = document.getElementById("passw_validator")
        // if(this.state.passw === this.state.rep_passw){
        //     this.setState({passw_valid_text: "Correct"});
        //     label.style.color = '#489d4f';
        // } else {
        //     this.setState({passw_valid_text: "Пароли не совпадают"});
        //     label.style.color = '#e00004';
        // }
    }

    whoIAmChange(e){
        this.setState({who_i_am: e.target.value});
    }


    render() {
        return (
            <small>
            <div className="card_registration">
                <h3>Регистрация</h3>
                <div className="dropdown-divider"/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingFamilt"
                               placeholder="Фамилия"
                               required={true}
                             onChange={this.familyChange}
                             value={this.state.last_name}
                        />
                        <label htmlFor="floatingInput">Фамилия</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingName"
                               placeholder="Имя"
                               required={true}
                            onChange={this.nameChange}
                            value={this.state.name}
                        />
                        <label htmlFor="floatingPassword">Имя</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingFatherName"
                               placeholder="Отчество"
                               required={true}
                             onChange={this.fatherNameChange}
                             value={this.state.father_name}
                        />
                        <label htmlFor="floatingInput">Отчество</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput"
                               placeholder="name@example.com"
                               required={true}
                             onChange={this.emailChange}
                             value={this.state.email}
                        />
                        <label htmlFor="floatingInput">Электронная почта</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword"
                               placeholder="Password"
                               required={true}
                             onChange={this.passwChange}
                             value={this.state.passw}
                        />
                        <label htmlFor="floatingPassword">Пароль</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword1"
                               placeholder="Password"
                               required={true}
                             onChange={this.repPasswChange}
                             value={this.state.rep_passw}
                        />
                        <label htmlFor="floatingPassword1">Повторите пароль</label>
                    </div>
                    <small id="passw_validator"></small>
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelect"
                                aria-label="Floating label select example"
                                required={true}
                             onChange={this.whoIAmChange}

                        >
                            <option value="0" selected>Студент</option>
                            <option value="1">Преподаватель</option>
                        </select>
                        <label htmlFor="floatingSelect">Я - </label>
                    </div>
                    <br/>
                    <button className="btn btn-outline-dark">Зарегистрироваться</button>
            </div>
            </small>
        );
    }
}

export default Registration;