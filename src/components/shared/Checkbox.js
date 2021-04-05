import React from "react";

function Checkbox({ ...props }) {
  return (
    <label>
      <input type="checkbox" {...props} />
      Remember me
    </label>
  );
}

export default Checkbox;
