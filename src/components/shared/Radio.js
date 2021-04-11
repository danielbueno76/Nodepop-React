import { SELL } from "../../utils/utils";

const Radio = ({ arrayValues, ...props }) => {
  return (
    <div className="control">
      {arrayValues.map((children) => {
        return (
          <label key={children} className="radio">
            <input
              type="radio"
              name="sale"
              value={children === SELL}
              {...props}
            />
            {children}
          </label>
        );
      })}
    </div>
  );
};
export default Radio;
