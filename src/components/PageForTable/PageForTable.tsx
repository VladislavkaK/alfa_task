import React, { useState } from 'react';
import { ProgressBar, Radio } from '../../components';
import { Link } from 'react-router-dom';
import Input from 'arui-feather/input';

import './style.scss';

const PageForTable = (props: any) => {

    const [currentLink, setCurrentLink] = useState('');

    const onHandleClick = (e: any) => {
        const value = e.currentTarget.textContent;

        setCurrentLink(value)
    }
    
    const linksArray = [
        {
            title: "ProgressBar",
            href: "#progress-bar"
        },
        {
            title: "Radio",
            href: "#radio"
        },
        {
            title: "Данные из таблицы",
            href: "#data-for-table"
        },
    ];

    const links = linksArray.map((value, index) => {
        return (
            <li className="current__menu__item" key={index} onClick={(e) => onHandleClick(e)} >
                <a href={`${value.href}`} >{value.title}</a>
            </li>
        )
    })

    return (
        <div className="data__for__table">
            <div>
                <Link to={{pathname: "/dashboard"}} >Назад</Link>
            </div>
            <div>
                <div className='row'>
                    <div className='column'>
                        <nav className="primary__nav__wrap">
                            <ul>
                                {links}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> <br />
            {(currentLink === "" || currentLink === "Данные из таблицы") && (
                <div className='row'>
                        <Input
                            placeholder='firstname'
                            size='l'
                            value={props.location.state.url_firstname}
                        />
                        <Input
                            placeholder='lastname'
                            size='l'
                            value={props.location.state.url_lastName}
                        />
                        <Input
                            placeholder='age'
                            size='l'
                            value={props.location.state.url_age.toString()}
                        />
                </div>
            )}
            {currentLink === "ProgressBar" && <ProgressBar />}
            {currentLink === "Radio" && <Radio />}
        </div>
    )
}

export default PageForTable;