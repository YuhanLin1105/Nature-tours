import React, { Component } from 'react';
import Header from '../../components/UI/Header/Header'



class layout extends Component {


    render() {
        return (
            <div>
                <Header></Header>
                <main>
                    {this.props.children}
                </main>
            </div>

        )
    };
}

export default layout;