import { Button } from "./style";
import PropTypes from "prop-types";

function DefaultButton({ children, theme, ...props }) {
  return (
    <Button {...props} theme={theme}>
      {children}
    </Button>
  );
}

DefaultButton.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DefaultButton;
