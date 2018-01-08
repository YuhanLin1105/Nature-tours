import React from 'react';
import urlLogoGreen1x from '../../assets/img/logo-green-1x.png';
import urlLogoGreen2x from '../../assets/img/logo-green-2x.png';
import urlLogoGreenSmall1x from '../../assets/img/logo-green-small-1x.png';
import urlLogoGreenSmall2x from '../../assets/img/logo-green-small-2x.png';
import urlLogoWhite from '../../assets/img/logo-white.png';

const logo = (props) => {
    let logoDivClass = [];
    let logoImgClass = [];
    let logoImgUrl;

    switch (props.logoColor) {
        case "logo-white":
            logoImgUrl = urlLogoWhite;
            break;

        default:
            break;
    }

    switch (props.logoWhere) {
        case "logo-header":
            logoImgClass.push("header__logo");
            logoDivClass.push("header__logo-box")
            break;

        default:
            break;
    }

    logoDivClass=logoDivClass.join(" ");
    logoImgClass=logoImgClass.join(" ");

    return (
        <div className={logoDivClass}>
            <img
                className={logoImgClass}
                src={urlLogoWhite}
                alt="Logo" />
        </div>
    );
};

export default logo;