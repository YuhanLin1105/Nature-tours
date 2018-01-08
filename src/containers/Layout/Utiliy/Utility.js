import React from 'react';

const utiliy =(props)=>{
    let uClass =[];
    // switch (props.uType) {
    //     case "text-center":
    //         uClass.push("u-center-text");
    //         break;
    //     default:
    //         break;
    // }
    uClass=props.uType.join(" ");
    return(
        <div className={uClass}>
            {props.children}
        </div>
    );
};

export default utiliy;