import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props.elementConfig}
                onChange={props.changed}
                value={props.value}
                />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement}{ ...props}/>;
            break;
        case('select'):
            inputElement = 
                <select className={classes.InputElement} value={props.value}>
                    {props.elementConfig.options.map(option=>(
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props}/>;
    }

    return (
        <div className={classes.Input}>
            <label >{props.label}</label>
            {inputElement}
        </div>

    );

}

export default input;