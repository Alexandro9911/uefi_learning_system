import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.familyChange = this.familyChange.bind(this);
        this.fatherNameChange = this.fatherNameChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwChange = this.passwChange.bind(this);
        this.repPasswChange = this.repPasswChange.bind(this);
        this.whoIAmChange = this.whoIAmChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    familyChange(e){
        this.props.setLastName(e.target.value);
    }
    nameChange(e){
        this.props.setName(e.target.value);
    }
    fatherNameChange(e){
        this.props.setMiddleName(e.target.value);
    }

    emailChange(e){
        this.props.setEmail(e.target.value)
    }

    passwChange(e){
        this.props.setPassw(e.target.value);
    }
    repPasswChange(e){
        this.props.setRepPassw(e.target.value);
        // let label = document.getElementById("passw_validator")
        // if(this.state.passw === this.state.rep_passw){
        //     this.setState({passw_valid_text: "Correct"});
        //     label.style.color = '#489d4f';
        // } else {
        //     this.setState({passw_valid_text: "Пароли не совпадают"});
        //     label.style.color = '#e00004';
        // }
    }

    whoIAmChange(e){
        this.props.setWhoIam(+e.target.value);
    }

     async onButtonClick(e){
         // $first_name = addslashes($_POST['name']);
         // $last_name = addslashes($_POST['last_name']);
         // $middle_name = addslashes($_POST['father_name']);
         // $category = addslashes($_POST['category']);
         // $email = addslashes($_POST['email']);
         // $passw = addslashes($_POST['passw']);

         let answ = "";
        let resp = await fetch("http://localhost/uefi_learning_system/registryUser.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                name: this.props.name,
                last_name: this.props.last_name,
                father_name: this.props.middle_name,
                category: this.props.who_i_am,
                email: this.props.email,
                passw: this.props.password
            })
        })
            .then(response => response.text())
            .then(result => answ = result)
         // eslint-disable-next-line default-case
            switch (answ) {
                case 'user_exists':{
                    alert("Пользователь с таким email уже существует.");
                    break;
                }
                case 'success': {
                    alert("Вы зарегистрированы");
                    break;
                }
                case 'connection error': {
                    alert("Ошибка соединения с базой данных");
                    break;
                }
                case 'error in': {
                    alert('Ошибка при выполнении запроса');
                    break;
                }
                case 'error isset':{
                    alert("Ошибка при передаче данных");
                    break;
                }
            }
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
                             value={this.props.last_name}
                        />
                        <label htmlFor="floatingInput">Фамилия</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingName"
                               placeholder="Имя"
                               required={true}
                            onChange={this.nameChange}
                            value={this.props.name}
                        />
                        <label htmlFor="floatingPassword">Имя</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingFatherName"
                               placeholder="Отчество"
                               required={true}
                             onChange={this.fatherNameChange}
                             value={this.props.middle_name}
                        />
                        <label htmlFor="floatingInput">Отчество</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput"
                               placeholder="name@example.com"
                               required={true}
                             onChange={this.emailChange}
                             value={this.props.email}
                        />
                        <label htmlFor="floatingInput">Электронная почта</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword"
                               placeholder="Password"
                               required={true}
                             onChange={this.passwChange}
                             value={this.props.password}
                        />
                        <label htmlFor="floatingPassword">Пароль</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword1"
                               placeholder="Password"
                               required={true}
                             onChange={this.repPasswChange}
                             value={this.props.repeatPassw}
                        />
                        <label htmlFor="floatingPassword1">Повторите пароль</label>
                    </div>
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelect"
                                aria-label="Floating label select example"
                                required={true}
                             onChange={this.whoIAmChange}
                                value={this.props.who_i_am}
                        >
                            <option value="0" selected>Студент</option>
                            <option value="1">Преподаватель</option>
                        </select>
                        <label htmlFor="floatingSelect">Я - </label>
                    </div>
                    <br/>
                    <button className="btn btn-outline-dark" onClick={this.onButtonClick}>Зарегистрироваться</button>
            </div>
            </small>
        );
    }
}
