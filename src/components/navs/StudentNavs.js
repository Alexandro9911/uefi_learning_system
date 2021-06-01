import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useRouteMatch} from "react-router-dom";
import '../../App.css'


export default function UserNavs() {
    let match = useRouteMatch();
    return (
        <div>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/join_group`}>Вступить в группу</Link></ul>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/user_page`}>Теория</Link></ul>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/user_page`}>Тесты</Link></ul>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/practice_page`}>Практика</Link></ul>
            <ul><Link className="btn btn-sm btn-outline-secondary btn-block" to={`${match.url}/user_page`}>Настройки профиля</Link></ul>
        </div>
    );
}

