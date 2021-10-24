import React from "react";
import PropTypes from "prop-types";

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
          renderStar={this.props.children}
        />
      );
    }

    return <>{stars}</>;
  }
}

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

class Star extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clickedStarValue =
      this.props.starValue === this.props.starRatingValue
        ? 0
        : this.props.starValue;

    this.props.onClick(clickedStarValue);
  }

  render() {
    const isFilled = this.props.starValue <= this.props.starRatingValue;

    return this.props.renderStar(this.handleClick, isFilled);
  }
}
