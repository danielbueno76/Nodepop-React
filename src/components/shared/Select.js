import React from "react";

const Select = ({ allTags, ...props }) => {
  return (
    <div className="select is-multiple">
      <select multiple size={allTags.length} {...props}>
        {allTags.length &&
          allTags.map((tag) => {
            return (
              <option key={tag} value={tag}>
                {tag}
              </option>
            );
          })}
      </select>
    </div>
  );
};
export default Select;
