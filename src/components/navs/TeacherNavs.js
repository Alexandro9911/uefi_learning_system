import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useRouteMatch} from "react-router-dom";
import '../../App.css'


export default function TeachersNavs() {
    let match = useRouteMatch();
    return (
        <div>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/groups`}>Мои группы</Link></ul>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/user_page`}>Теория</Link></ul>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/tests`}>Тесты</Link></ul>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/practice`}>Практика</Link></ul>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/user_page`}>Настройки профиля</Link></ul>
        </div>
    );
}