const DeleteButton = ({ children, ...props }) => {
  return (
    <button className="button is-danger" {...props}>
      {children}
    </button>
  );
};
export default DeleteButton;
