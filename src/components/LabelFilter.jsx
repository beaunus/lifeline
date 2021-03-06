import React from "react";
import PropTypes from "prop-types";
import logoMap from "./logoMap";

function LabelFilter(props) {
  return (
    <div
      className={`label-filter ${props.filtered ? "filtered-label" : ""}`}
      onClick={e => {
        props.toggleLabel(props.labelName, e.target);
      }}
      onKeyPress={e => {
        props.toggleLabel(props.labelName, e.target);
      }}
      role="button"
      tabIndex="0"
    >
      <img
        className="label-logo"
        src={logoMap[props.labelName]}
        alt={props.labelName}
      />
    </div>
  );
}

LabelFilter.propTypes = {
  labelName: PropTypes.string.isRequired
};

export default LabelFilter;
