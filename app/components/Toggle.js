import React from 'react';

const Toggle = ({
  label,
}) => {
  return (
    <div className="toggle__container {{klass}}">
      <p className="toggle__label">{label}</p>
      <div className="toggle">
        <input type="checkbox" className="toggle__checkbox" checked={false} />
        <b className="toggle__switch"></b>
        <b className="toggle__track"></b>
      </div>
    </div>
  );
};

export default Toggle;
