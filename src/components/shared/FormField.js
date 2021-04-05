import React from "react";
import classNames from "classnames";

import "./FormField.css";

function FormField({ className, label, autofocus, autocomplete, ...props }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  return (
    <div
      className={classNames(
        "formField",
        { "formField--focused": false },
        className
      )}
    >
      <label className="formField-label">
        <span>{label}</span>
        <input
          ref={inputRef}
          className="formField-input"
          autoComplete={autocomplete ? "on" : "off"}
          {...props}
        />
      </label>
    </div>
  );
}

export default FormField;
