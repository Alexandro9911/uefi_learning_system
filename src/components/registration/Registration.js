import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'


class Registration extends Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswChange = this.onPasswChange.bind(this);
        this.onRepPasswChange = this.onRepPasswChange.bind(this);
    }

    onEmailChange(event){
        this.props.setEmail(event.target.value)
    }
    onPasswChange(event){
        this.props.setPassw(event.target.value)
    }

    onRepPasswChange(event){
        this.props.setRepPassw(event.target.value)
    }

    render() {
        return (
            <div className="registration_flex">
                <div className="card_registration">
                    <h3>Регистрация</h3>
                    <div className="dropdown-divider"/>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingFamilt"
                                   placeholder="Фамилия"
                                   required={true}
                                   // onChange={this.familyChange}
                                   // value={this.state.last_name}
                            />
                            <label htmlFor="floatingInput">Фамилия</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingName"
                                   placeholder="Имя"
                                   required={true}
                                   // onChange={this.nameChange}
                                   // value={this.state.name}
                            />
                            <label htmlFor="floatingPassword">Имя</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingFatherName"
                                   placeholder="Отчество"
                                   required={true}
                                   // onChange={this.fatherNameChange}
                                   // value={this.state.father_name}
                            />
                            <label htmlFor="floatingInput">Отчество</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"
                                   required={true}
                                   // onChange={this.emailChange}
                                   // value={this.state.email}
                            />
                            <label htmlFor="floatingInput">Электронная почта</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"
                                   required={true}
                                   // onChange={this.passwChange}
                                   // value={this.state.passw}
                            />
                            <label htmlFor="floatingPassword">Пароль</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword1"
                                   placeholder="Password"
                                   required={true}
                                   // onChange={this.repPasswChange}
                                   // value={this.state.rep_passw}
                            />
                            <label htmlFor="floatingPassword1">Повторите пароль</label>
                        </div>
                        <small id="passw_validator"></small>
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example"
                                    required={true}
                                    // onChange={this.whoIAmChange}
                                    // value={this.state.who_i_am}
                                >
                                <option value="0" selected>Студент</option>
                                <option value="1">Преподаватель</option>
                            </select>
                            <label htmlFor="floatingSelect">Я - </label>
                        </div>
                        <br/>
                        <button className="btn btn-outline-dark">Зарегистрироваться</button>
                    </form>
                </div>
                <div className="tips_registration">тута текстик</div>
            </div>
        );
    }
}

export default Registration;