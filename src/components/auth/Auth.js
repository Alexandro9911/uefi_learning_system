import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import {Link} from "react-router-dom";

export default class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswChange = this.onPasswChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onEmailChange(e){
        this.props.setEmail(e.target.value);
    }
    onPasswChange(event){
        this.props.setPassw(event.target.value);
    }

    async onSubmitHandler() {
        let answ = '';
        // добавить шифрование паролей.
        let resp = await fetch("http://localhost/uefi_learning_system/autorizeUser.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                email: this.props.email,
                passw: this.props.password,
            })
        })
            .then(response => response.text())
            .then(result => answ = result)
        // let str = JSON.stringify(answ);
        let jso = JSON.parse(answ);
        let res = jso['result']
        if(res === 'success'){
            if(jso['category'] === '1'){
                window.sessionStorage.setItem("userinfo", answ);
                window.sessionStorage.setItem("myid", jso['id']);
                window.sessionStorage.setItem("autorized", "true");
                let fio = jso['first_name'] + " " + jso['last_name'] + " " + jso['middle_name'];
                this.props.setAuthSuccess(fio,jso['id'],'/teacher_page');

                let answ1 =''
                let resp = await fetch("http://localhost/uefi_learning_system/getTeacherGroups.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: new URLSearchParams({
                        ovner: this.props.id

                    })
                })
                    .then(response => response.json())
                    .then(result => answ1 = result)
                let obj = JSON.parse(JSON.stringify(answ1));
                this.props.initList(obj);
            } else {
                if(jso['category'] === '0'){
                    let fio = jso['first_name'] + " " + jso['last_name'] + " " + jso['middle_name'];
                    this.props.setAuthSuccess(fio,jso['id'],'/user_page');
                    // тут надо вытащить все группы пользователя в которых он состоит
                }
            }
        } else {
            if(res === "isset error"){
                alert("error isset");
            } else {
                if(res === "connection error"){
                    alert("error connection");
                } else {
                    if(res === "not exist"){
                        alert("Неверный логин или пароль");
                        this.props.setAuthBad();
                    } else {
                        alert("server error");
                    }
                }
            }
        }
    }


    render() {
        return (
            <div className="login_page">
                <div className="card_login">
                    <h4>Вход</h4>
                    <div className="dropdown-divider"/>
                    <br/>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"
                                   required={true}
                                   onChange={this.onEmailChange}
                                   value={this.props.email}/>
                            <label htmlFor="floatingInput">Логин или email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"
                                   required={true}
                                   onChange={this.onPasswChange}
                                   value={this.props.password}/>
                            <label htmlFor="floatingPassword">Пароль</label>
                        </div>
                        <Link to={this.props.link} onClick={this.onSubmitHandler}
                              className="btn btn-outline-dark">   Войти   </Link>
                    </form>
                    <div className="dropdown-divider"/>
                    <h6>Еще не зарегистрированы?</h6>
                    <Link to="/registration_page" className="btn-sm btn-outline-primary">Зарегистрироваться</Link>
                </div>
            </div>
        );
    }
}