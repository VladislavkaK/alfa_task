import React from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import Button from 'arui-feather/button';
import { actionLogout } from '../../actions/actionLogout';
import { Redirect } from 'react-router-dom';

const Dashboard = (props: any) => {
    let handleLogout = useCallback(
        (): void => {
            // isAuth = false;
            props.actionLogout()
        },
        []
    )

    return (
        <div className="page__dashboard" >
            <Button view='extra' type='submit' onClick={handleLogout} >Выйти</Button>
        </div>
    )
}

const mapStateToProps = (state: any) => {

    return {
        isAuth: state.logout.isAuth
    }
};

const mapDispatchToProps = {
    actionLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);