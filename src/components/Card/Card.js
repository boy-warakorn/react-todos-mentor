import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({ children }) => {
  return <div className="container">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
