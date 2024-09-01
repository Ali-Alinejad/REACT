// eslint-disable-next-line react/prop-types
const AlertMessage = ({ message }) => {
  return (
    <div className="alert">
      <span role="img" aria-label="Warning">
        ⚠️
      </span>{" "}
      {message}
    </div>
  );
};

export default AlertMessage;
