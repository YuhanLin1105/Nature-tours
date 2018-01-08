import React from 'react';
import Logo from '../../Logo/Logo';
import Button from '../Button/Button';


const header = (props) => {
    return (
        <header
            className="header">
            <Logo
                logoColor="logo-white"
                logoWhere="logo-header"/>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
                <Button
                    btnType="btn"
                    btnColor="white"
                    btnAnimation="moveInBottom"
                    btnHeader>DISCOVER OUR TOURS</Button>
            </div>

        </header>
    )
}

export default header;