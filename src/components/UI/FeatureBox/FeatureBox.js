import React from 'react';

const featureBox = (props) => {
    return (
        <div className="feature-box">
            <i className={"feature-box__icon "+props.iconClass} aria-hidden="true"/>
            <h3 className="heading-tertiary u-margin-bottom-small" >{props.title}</h3>
            <p className="feature-box__text">
                {props.content}
            </p>
        </div>
    );
};

export default featureBox;