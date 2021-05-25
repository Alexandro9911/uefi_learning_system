import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

class FormGroupCreate extends Component {
    constructor(props) {
        super(props);

        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.descrChange = this.descrChange.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
    }

    getRandomInt(max, min) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return rand
    }
    onClickButton(){
        let val = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
        let res = '';
        for(let i = 0; i < 21; i++){
            let rand = Math.floor(1 + Math.random() * (61 + 1 - 1));
            res +=val[rand]+"";
        }
        alert(res);
        this.props.setToken(res);
    }

    async onSubmitForm(e){
        e.preventDefault();
        let answ
        let resp = await fetch("http://localhost/uefi_learning_system/CreateGroup.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                ovner: this.props.ovner,
                title: this.props.title,
                descr: this.props.descr,
                token: this.props.token
            })
        })
            .then(response => response.text())
            .then(result => answ = result)
        if(answ === 'success'){
            alert("group added")
            let group = {
                ovner: this.props.ovner,
                title: this.props.title,
                descr: this.props.descr,
                token: this.props.token
            };
            this.props.addGroup(group);
        } else {
            alert("error")
        }
    }

    titleChange(e){
        this.props.setTitle(e.target.value);
    }

    descrChange(e){
        this.props.setDescr(e.target.value);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onSubmitForm} className="card card-body w-50">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingTitle"
                               placeholder="Название группы"
                               required={true}
                               value={this.props.title}
                               onChange={this.titleChange}
                        />
                        <label htmlFor="floatingInput">Название группы</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingDescr"
                               placeholder="Описание"
                               value={this.props.descr}
                               onChange={this.descrChange}
                        />
                        <label htmlFor="floatingInput">Описание группы</label>
                    </div>
                    <div className="btn btn-outline-primary" onClick={this.onClickButton}>Сгенерировать токен</div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingFamilt"
                               placeholder="токен"
                               required={true}
                               readOnly={true}
                               value={this.props.token}/>
                        <label htmlFor="floatingInput">Токен группы</label>
                    </div>
                    <div className="form-floating mb-3 align-content-center">
                        <button className="btn btn-outline-primary">Создать</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default FormGroupCreate;