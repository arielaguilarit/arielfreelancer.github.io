import StickySubTitle from "../../atoms/StickySubTitle";
import CardProject from "../../molecules/CardProject";
import projects from "./projects";
import { Main } from "./styles";

const index = () => {
  return (
    <>
      <StickySubTitle title={"Projects"} />
      <Main>
        {projects.map((p) => (
          <CardProject key={p.id} {...p} />
        ))}
      </Main>
    </>
  );
};

export default index;
