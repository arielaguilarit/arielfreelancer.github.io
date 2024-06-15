import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import { Actions, Card, Content } from "./styles";
const CardProject = ({ nameProject, description, stack, src, alt }) => {
  return (
    <Card>
      <Content>
        <div>
          <h3>{nameProject}</h3>
          <p>{description}</p>
          <p>{stack.join(" / ")}</p>
        </div>

        <Actions>
          <Button label={"Ver Detalles"} />
          <Button label={"Ir a Github"} />
        </Actions>
      </Content>
      <div>
        <img src={src} alt={alt} />
      </div>
    </Card>
  );
};

CardProject.propTypes = {
  nameProject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardProject;
