import React from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import Button from 'arui-feather/button';
import { actionLogout } from '../../actions/actionLogout';
import { Link } from 'react-router-dom';
import { ReactTable } from '../../components';
import './styles/style.scss';

const Dashboard = (props: any) => {

    let handleLogout = useCallback(
        (): void => {
            // props.isAuth = false;
            props.actionLogout()
        },
        []
    )

    return (
        <>
            <header className="header__app" >
                <h1 className="header__app--logo" ><Link to={{pathname: "/dashboard"}} >Dashboard</Link></h1>
                <ul className="header__app--navbar" style={{margin: "10px"}}>
                        <Button view='extra' type='submit' onClick={handleLogout} >Выйти</Button>
                </ul>
            </header>
            <main className="main__container" style={{padding: "30px"}} >
                    <ReactTable />
            </main>
        </>
    )
}

const mapStateToProps = (state: any) => {

    return {
        isAuth: state.login.isAuth
    }
};

const mapDispatchToProps = {
    actionLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);