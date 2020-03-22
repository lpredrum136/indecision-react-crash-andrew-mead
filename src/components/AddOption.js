import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = event => {
    //This is the function of THIS class
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option); //This is the function PASSED DOWN from parent(Indecision)
    // If error (see Parent Indecision, handleAddOption() declaration to see two errors). If no error it's gonna return undefined
    this.setState(() => ({ error: error }));

    if (!error) {
      event.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' id='' />
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
