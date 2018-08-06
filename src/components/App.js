import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <img src="GitHub-Mark.png" alt="logo" style={{height: '65px'}}/><h1><Link to="/">Github Clone</Link></h1>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;
