import React from 'react';

import '../css/BinaryToDecimal.css';

class BinaryToDecimal extends React.Component {

  state = {
      input: '',
      display: ''
  }

  handleInput = e => {
      this.setState({
          input: e.target.value
      });
  }

  handleConversion = () => {
    if (this.state.input === '') return;
    const binary = this.state.input.split(' ').join('');
    const errorMessage = "INVALID INPUT! You must enter only 1s and 0s!";
    if (!isNaN(binary)) {
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] !== '0' && binary[i] !== '1') {
                alert(errorMessage);
                this.setState({
                    input: ''
                });
                return;
            }
        }
        this.setState({
            display: parseInt(binary, 2)
        });
    } else {
        alert(errorMessage);
        this.setState({
            input: ''
        });
    }
  }

  handleClear = () => {
      this.setState({
          input: '',
          display: ''
      });
  }

  render() {
      return (
          <div className="container">
              <div className="app-title">BINARY TO DECIMAL CONVERTER</div>
              <div className="display">
              {this.state.display}
              </div>
              <textarea className="input" rows="6" cols="10"
               type="text"
               value={this.state.input}
               onChange={this.handleInput} 
               placeholder="input binary here"
               >
               </textarea>
              <div className="buttons">
                <button className="button" id="convert" onClick={this.handleConversion}>CONVERT</button>
                <button className="button" id="clear" onClick={this.handleClear}>CLEAR</button>
              </div>
          </div>
      )
  }
}

export default BinaryToDecimal;