import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      <button
        className='button button--link'
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>

    {props.options.length === 0 && (
      <p className='widget-message'>Please add an option to get started</p>
    )}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      /> // Cu array thi phai co "key"
    ))}
  </div>
);
export default Options;
