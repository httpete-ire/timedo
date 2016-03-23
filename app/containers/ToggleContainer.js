import React from 'react';
import Toggle from './../components/Toggle.js';
import { connect } from 'react-redux';

let ToggleContainer = () => {
  return (
    <div className="toggle-container">
      <Toggle label={'Desktop notifications'} />
    </div>
  );
};

export default ToggleContainer;
