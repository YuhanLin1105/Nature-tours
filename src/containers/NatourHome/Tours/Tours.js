import React from 'react';
import Card from '../../../components/UI/Card/Card';

const tours = (props) => {
    const toursContent={
        title:"most popular tours",
        cardsContent:{
            c1: {
                title: "EXPLORE THE WORLD",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
                iconClass: "fa fa-globe",
            },
            c2: {
                title: "MEET NATURE",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
                iconClass: "fa fa-compass"
    
            },
            c3: {
                title: "FIND YOUR WAY",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
                iconClass: "fa fa-map-o"
    
            }
    
        }
    }

    const Cards = Object.keys(toursContent.cardsContent).map(key => (
        <div class="col-1-of-3">
            <Card
                key={key}
                {...toursContent.cardsContent[key]}
            />
        </div>
    ))


    return (
        <div class="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    {toursContent.title}
                </h2>
            </div>
            <div class="row">
                {Cards}
            </div>
        </div>
    );

};

export default tours;
