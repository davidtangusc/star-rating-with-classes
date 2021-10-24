import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class StarRating extends React.Component {
  render() {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          starValue={i}
          starRatingValue={this.props.value}
          key={i}
          onClick={this.props.onClick}
        />
      );
    }

    return <>{stars}</>;
  }
}

class Star extends React.Component {
  render() {
    const emptyColor = "#ddd";
    const filledColor = "yellow";
    const size = "3x";

    return (
      <button
        type="button"
        className="btn btn-link"
        onClick={() => {
          const clickedStarValue =
            this.props.starValue === this.props.starRatingValue
              ? 0
              : this.props.starValue;

          this.props.onClick(clickedStarValue);
        }}
      >
        <FontAwesomeIcon
          icon={faStar}
          color={
            this.props.starValue <= this.props.starRatingValue
              ? filledColor
              : emptyColor
          }
          size={size}
        />
      </button>
    );
  }
}
