import React from 'react';

import FeatureBox from '../../../components/UI/FeatureBox/FeatureBox';

const features = (props)=>{
    return (
        <section class="section-features">
            <div class="row">
                <div class="col-1-of-4">
                    <FeatureBox/>
                </div>
            </div>    
        </section>
    );

}

export default features;