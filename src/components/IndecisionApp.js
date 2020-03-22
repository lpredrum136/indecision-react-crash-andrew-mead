import React, { Component, Fragment } from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // handleDeleteOptions
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  // handle delete one option
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  // Handle pick
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState({ selectedOption: option });
  };

  // Handle add option
  handleAddOption = option => {
    if (!option) {
      // Empty input
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
    // Tu lam, k nen vi se thay doi truc tiep cai options. Nen tao han mot cai moi
    // prevState.options.push(option);
    // return {
    //     options: prevState.options
    // };
  };

  // Handle close modal after user chooses an option
  handleClearSelectedOption = () => {
    this.setState({ selectedOption: undefined });
  };

  // LIFECYCLE
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(prevState => ({ options: options }));
      }
    } catch (err) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // When props or state change
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
