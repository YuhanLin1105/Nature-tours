import React from 'react';

import FeatureBox from '../../../components/UI/FeatureBox/FeatureBox';

const features = (props) => {


    const featuresContent = {
        f1: {
            title: "EXPLORE THE WORLD",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
            iconClass: "fa fa-globe",
        },
        f2: {
            title: "MEET NATURE",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
            iconClass: "fa fa-compass"

        },
        f3: {
            title: "FIND YOUR WAY",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
            iconClass: "fa fa-map-o"

        },
        f4: {
            title: "LIVE A HEALTHIER LIFE",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
            iconClass: "fa fa-heart-o"

        }

    }

    const featureBoxs = Object.keys(featuresContent).map(key => (
        <div class="col-1-of-4">
            <FeatureBox 
                key={key}
                {...featuresContent[key]}
                />
        </div>  
    ))



    return (
        <section class="section-features">
            <div class="row">
                {featureBoxs}
            </div>
        </section>
    );

}

export default features;