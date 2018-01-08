import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import NatourHome from './containers/NatourHome/NatourHome'

class App extends Component {
  render() {
    return (
      <Layout>
        <NatourHome/>
      </Layout>
    );
  }
}

export default App;
