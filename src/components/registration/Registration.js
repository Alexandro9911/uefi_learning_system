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
            <div className="registration_page">
                <div className="registration_flex">
                    <div className="card_registration">
                        <h3>Регистрация</h3>
                        <div className="dropdown-divider"/>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                       placeholder="name@example.com"
                                       required={true}
                                        onChange={this.onEmailChange}
                                        value={this.props.email}/>
                                <label htmlFor="floatingInput">Электронная почта</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password"
                                       required={true}
                                       onChange={this.onPasswChange}
                                       value={this.props.password}/>
                                <label htmlFor="floatingPassword">Пароль</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword1"
                                       placeholder="Password"
                                       required={true}
                                       onChange={this.onRepPasswChange}
                                       value={this.props.repeatPassw}/>
                                <label htmlFor="floatingPassword1">Повторите пароль</label>
                            </div>
                            <br/>
                            <button className="btn btn-outline-dark">Зарегистрироваться</button>
                        </form>
                    </div>
                    <div className="tips_registration">тута текстик</div>
                </div>
            </div>
        );
    }
}

export default Registration;