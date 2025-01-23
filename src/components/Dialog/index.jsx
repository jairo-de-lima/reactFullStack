import { Alert } from "./style";
import PropTypes from "prop-types";

function Dialog({ message, onClose }) {
  return (
    <Alert>
      {message}
      <button
        onClick={onClose}
        style={{
          marginLeft: "10px",
          background: "transparent",
          border: "none",
          color: "#721c24",
          cursor: "pointer",
        }}
      >
        ×
      </button>
    </Alert>
  );
}
Dialog.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.bool.isRequired,
};

export default Dialog;
