import { Aside, Container, Main } from "./styles";

import MenuButtonFloat from "../atoms/MenuButtonFloat";
import About from "../organism/About/index";
import Avatar from "../organism/Avatar/index";
import Experience from "../organism/Experience/index";
import Projects from "../organism/Projects/index";
import Skills from "../organism/Skills/index";
const ContainerApp = () => {
  return (
    <Container>
      <Aside>
        <Avatar />
      </Aside>
      <Main>
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <h2>Contacts...</h2>
        </section>
      </Main>

      <MenuButtonFloat />
    </Container>
  );
};

export default ContainerApp;
