import React from "react";
import PropTypes from "prop-types";
function Header(e) {
  const { branding } = e;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
}
Header.defaultProps = {
  branding: "Contact Manager default",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
