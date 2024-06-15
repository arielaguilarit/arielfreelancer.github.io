import { useEffect, useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Menu, MenuButton, MenuItem } from "./styles";

const MenuButtonFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsVisible(!isVisible);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <CgMenuGridO size={20} />
      </MenuButton>

      {isVisible && (
        <Menu ref={menuRef}>
          <MenuItem>Acerca de</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Experiences</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default MenuButtonFloat;
