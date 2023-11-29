import "./Hamburger.css";

export const HamburgerIcon = ({ toggleMenu }) => {
  return (
    <div id="menuToggle" onClick={toggleMenu}>
      <input id="checkbox" type="checkbox" />
      <label className="toggle" for="checkbox">
        <div className="bar bar--top"></div>
        <div className="bar bar--middle"></div>
        <div className="bar bar--bottom"></div>
      </label>
    </div>
  );
};
