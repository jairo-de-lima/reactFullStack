import { DefaltContainer } from "./style";
import PropTypes from "prop-types";

function Container({ children }) {
  return <DefaltContainer>{children}</DefaltContainer>;
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
