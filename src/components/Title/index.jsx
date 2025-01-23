import { DefaulTitle } from "./style";
import PropTypes from "prop-types";

function Title({ children, ...props }) {
  return <DefaulTitle {...props}>{children}</DefaulTitle>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Title;
