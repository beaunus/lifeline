import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import moment from "moment";

const Card = props => {
  const classNames = ["container"];
  if (props.isEven) {
    classNames.push("left");
  } else {
    classNames.push("right");
  }
  const events = Object.keys(props.events)
    .map(label => {
      if (props.labels[label]) {
        return props.events[label].map((event, eventIndex) => (
          <Event key={`${label}_${eventIndex}`} label={label} event={event} />
        ));
      }
      return null;
    })
    .filter(event => event);
  if (events.length > 0) {
    let cardHeading;
    const dateMoment = moment(props.date);
    switch (props.granularity) {
      case "week":
        cardHeading = `Week of ${dateMoment.format(
          "MMMM D, YYYY"
        )} - ${dateMoment.add(6, "days").format("MMMM D, YYYY")}`;
        break;
      case "month":
        cardHeading = `${dateMoment.format("MMMM YYYY")}`;
        break;
      case "year":
        cardHeading = `${dateMoment.format("YYYY")}`;
        break;
      default:
        cardHeading = dateMoment.format("MMMM D, YYYY");
    }
    return (
      <div className={classNames.join(" ")}>
        <div className="content">
          <div className="pub-date">{cardHeading}</div>
          {Object.keys(props.events).map(label => {
            if (props.labels[label]) {
              return props.events[label].map((event, eventIndex) => (
                <Event
                  key={`${label}_${eventIndex}`}
                  label={label}
                  event={event}
                />
              ));
            }
            return null;
          })}
        </div>
      </div>
    );
  }
  return null;
};

Card.propTypes = {
  date: PropTypes.string.isRequired,
  events: PropTypes.object.isRequired,
  granularity: PropTypes.string.isRequired,
  isEven: PropTypes.bool.isRequired,
  labels: PropTypes.object.isRequired
};

export default Card;
