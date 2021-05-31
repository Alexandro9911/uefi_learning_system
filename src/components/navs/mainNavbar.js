import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import {Link} from "react-router-dom";

class Navbar extends Component {

    render() {

        return (
            <div className="navbar_back">
                <div className="navbar_btn_container">
                    <Link to={'/'} className="btn btn-outline-dark">Вход</Link>
                    <Link to={'/registration_page'} className="btn btn-outline-dark">Регистрация</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;