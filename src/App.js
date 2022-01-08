import React, { Component } from 'react';
import Header from './components/Header'
import AppList from './components/AppList'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <AppList />
            </div>
        );
    }
}
export default App;