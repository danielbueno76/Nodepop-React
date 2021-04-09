import React from "react";

function Checkbox({ ...props }) {
  return (
    <label className="checkbox">
      <input type="checkbox" {...props} />
      Remember me
    </label>
  );
}

export default Checkbox;
