import "./Alert.css";

const Alert = ({ message, onClose }) => {

  const handleOkClick = () => {
    onClose();
  };

  return (
    <>
        <div className="alert-overlay">
          <div className="alert">
            <h2>{message}</h2>
            <button onClick={handleOkClick}>OK</button>
          </div>
        </div>
      
    </>
  );
};

export default Alert ;


