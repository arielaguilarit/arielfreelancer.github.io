import { BiLogoTypescript } from "react-icons/bi";
import { FaAws, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5 } from "react-icons/fa";
import { FaGitlab, FaNodeJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiAmazondynamodb,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { LogosSkills } from "./styles";

const index = () => {
  return (
    <>
      <h2>Skills...</h2>
      <LogosSkills>
        <div>
          <FaHtml5 size={50} />
        </div>
        <div>
          <FaCss3Alt size={50} />
        </div>
        <div>
          <RiJavascriptFill size={60} />
        </div>
        <div>
          <BiLogoTypescript size={50} />
        </div>
        <div>
          <GrReactjs size={50} />
        </div>
        <div>
          <FaNodeJs size={50} />
        </div>
        <div>
          <SiTailwindcss size={50} />
        </div>
        <div>
          <SiStyledcomponents size={60} />
        </div>
        <div>
          <FaGitAlt size={50} />
        </div>
        <div>
          <FaGitlab size={50} />
        </div>
        <div>
          <FaGithub size={50} />
        </div>
        <div>
          <SiMongodb size={50} />
        </div>
        <div>
          <SiPostgresql size={50} />
        </div>

        <div>
          <TbBrandNextjs size={50} />
        </div>
        <div>
          <SiNestjs size={50} />
        </div>
        <div>
          <SiRedis size={50} />
        </div>
        <div>
          <FaAws size={50} />
        </div>
        <div>
          <SiAmazondynamodb size={50} />
        </div>
      </LogosSkills>
    </>
  );
};

export default index;
