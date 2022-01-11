import React, { Component } from 'react';
import Header from './components/Header'
import AppList from './components/AppList'
import Spacer from './components/Spacer'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Spacer axis="vertical" size={132} />
                <AppList />
            </div>
        );
    }
}
export default App;