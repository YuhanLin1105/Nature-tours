import React from 'react';

const button = (props)=>{
    let btnClass = [];
    switch (props.btnType) {
        case "btn":
            btnClass.push("btn");
            break;
        case "btn-text":
            btnClass.push("btn-text");
        default:
            break;
    }

    switch (props.btnColor) {
        case undefined:
            break;
        case "white":
            btnClass.push("btn--white")
            break;    
    
        default:
            break;
    }

    switch (props.btnAnimation) {
        case undefined:
            break;
        case "moveInBottom":
            btnClass.push("btn--animation--moveInBottom")
            break;    
    
        default:
            break;
    }
    btnClass = btnClass.join(' ');
    return (
        <a href="#" className={btnClass}>{props.children}</a>
    );
};

export default button;