import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css'
import UserListGroups from "./userListGroups";

class JoinGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inserted_token: ''
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e){
        this.setState({inserted_token: e.target.value});
    }

    async onSubmitHandler(e){
        e.preventDefault();
        let answ
        let resp = await fetch("http://localhost/uefi_learning_system/joinGroup.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                myId: this.props.myId,
                token: this.state.inserted_token
            })
        })
            .then(response => response.text())
            .then(result => answ = result)
            switch (answ) {
                case 'success':{
                    alert("Вы вступили в группу");
                    break;
                }
                case 'connection_error':{
                    alert('connection_error')
                    break;
                }
                case 'error isset':{
                    alert('error isset')
                    break;
                }
                case 'error in insert':{
                    alert('error in insert')
                    break;
                }
                case 'already in':{
                    alert('Вы уже состоите в этой группе')
                    break;
                }
                case 'error in detection':{
                    alert('Такую группу найти не удалось')
                    break;
                }
            }
    }


    render() {

        return (
            <div className="join_page">
                <h4>Вступить в группу</h4>
                <h6>{this.props.myId}</h6>
                <h6 className="text-muted" >Для того чтобы вступить в группу нужно иметь токен этой группы.
                    Токен знает создатель группы.</h6>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="card card-body w-50">
                    <div className="row g-3">
                        <div className="col-sm">
                            <input type="text" className="form-control"
                                   placeholder="aB1CD1E2f3G4"
                                   aria-label="State"
                                   value={this.state.inserted_token}
                                   onChange={this.onChangeValue}
                            />
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-outline-dark">Вступить</button>
                        </div>
                    </div>
                    </div>
                </form>
                <div>
                </div>
                <div className="dropdown-divider"/>
                    <UserListGroups userGroups={this.props.userGroups} myId={this.props.myId}/>
            </div>
        );
    }
}

export default JoinGroup;