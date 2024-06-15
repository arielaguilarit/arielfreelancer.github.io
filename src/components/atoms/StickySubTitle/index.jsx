import PropTypes from "prop-types";
import { StickyTitle } from "./styles";
const StickySubTitle = ({ title }) => {
  return <StickyTitle>{title}</StickyTitle>;
};

StickySubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StickySubTitle;
