import React from "react";

const NWbutton = (props) => {
  const { children, type, classnames, name, ...rest } = props;
  return (
    <button {...rest} type={type} name={name}>
      {children}
    </button>
  );
};

export default NWbutton;
