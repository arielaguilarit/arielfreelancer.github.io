import PropTypes from "prop-types";

import { ContainerButton } from "./styles";

const Button = ({ label }) => {
  return <ContainerButton>{label}</ContainerButton>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
