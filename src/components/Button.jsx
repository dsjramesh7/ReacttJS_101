const Button = ({ handleTextChange, children }) => {
  return <button onClick={handleTextChange}>{children}</button>;
};

export default Button;
