import React from 'react';


const card = (props) => {
    return (
        <div className={props.style.card}>
            <div className={props.style.frontSide.side}>
                <div className={props.style.frontSide.img}>
                    &nbsp;
                </div>
                <h4 className={props.style.frontSide.heading}>
                    <span className={props.style.frontSide.headingSpan}>
                        {props.frontSide.title}
                    </span>

                </h4>
                <div className={props.style.frontSide.details}>
                    <ul>
                        <li> {props.frontSide.details.time}</li>
                        <li> {props.frontSide.details.people}</li>
                        <li> {props.frontSide.details.guide}</li>
                        <li> {props.frontSide.details.stay}</li>
                        <li> {props.frontSide.details.difficulty}</li>
                    </ul>
                </div>
            </div>
            <div className={props.style.backSide.side}>
                <div className={props.style.backSide.cta}>
                    <div className={props.style.backSide.priceBox}> 
                        <p className={props.style.backSide.priceOnly}>
                            {props.backSide.priceOnly}
                        </p>
                        <p className={props.style.backSide.priceValue}>
                            {props.backSide.priceValue}
                        </p>
                    </div>
                    <a href="#" className={props.style.backSide.button}>
                        {props.backSide.priceButton}
                    </a>
                </div>
            </div>
        </div>

    );
};

export default card; 