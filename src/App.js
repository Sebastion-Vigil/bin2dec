import React from 'react';
import BinaryToDecimal from './components/BinaryToDecimal.js';

import './css/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
              <BinaryToDecimal/>
            </div>
        )
    }
}

export default App;