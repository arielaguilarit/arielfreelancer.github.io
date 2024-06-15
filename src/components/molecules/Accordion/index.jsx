import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ContainerAccordion,
  ContentAccordion,
  DateContainer,
  HeaderAccordion,
  TitleContainer,
  ToggleIcon,
} from "./styles";

const Accordion = React.memo(function Accordion({
  position,
  company,
  from,
  until,
  description,
}) {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const headerRef = useRef(null);

  const toggleAccordion = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  const closeAccordion = () => {
    if (isActive) {
      headerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    setHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isActive]);

  return (
    <ContainerAccordion>
      <HeaderAccordion ref={headerRef} onClick={toggleAccordion}>
        <TitleContainer>
          <h5>{position}</h5>
          <h6>{company}</h6>
        </TitleContainer>
        <DateContainer>
          <h5>
            {from} - {until}
          </h5>
          <ToggleIcon>{isActive ? "-" : "+"}</ToggleIcon>
        </DateContainer>
      </HeaderAccordion>
      <ContentAccordion
        $isActive={isActive}
        $height={height}
        ref={contentRef}
        onTransitionEnd={closeAccordion}
      >
        <p>{description}</p>
      </ContentAccordion>
    </ContainerAccordion>
  );
});

Accordion.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  until: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Accordion;
