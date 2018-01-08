import React from 'react';

import About from './About/About';
import Features from './Features/Features';
import Ax from '../../hoc/Ax';

export default class NatourHome extends React.Component {
    render(){
        return (
            <Ax>
                <About/>
                <Features/>
            </Ax>
            
        );
    };

}