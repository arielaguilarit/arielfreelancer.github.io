import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContainerAvatar, Icons, Img } from "./styles";

const Avatar = () => {
  return (
    <ContainerAvatar>
      <h1>Ariel Aguilar </h1>
      <Img
        src="https://avatars.githubusercontent.com/u/1995779?v=4"
        alt="img-profile"
      />
      <p>
        Hola!, mi nombre es Ariel Aguilar (Fullstack Developer) con más de 10
        años de experiencia en desarrollo web.
      </p>
      <p>Bienvenido a mi portfolio, te invito a revisar mis proyectos.</p>

      <Icons>
        <FaGithub
          size={26}
          onClick={() =>
            (window.location = "https://github.com/arielaguilarit/")
          }
        />
        <FaLinkedin size={26} />
      </Icons>
    </ContainerAvatar>
  );
};

export default Avatar;
