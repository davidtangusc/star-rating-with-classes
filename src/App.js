import React from "react";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 2,
    };
  }

  render() {
    const size = "3x";

    return (
      <div className="App">
        <StarRating
          value={this.state.rating}
          onClick={(rating) => {
            this.setState({ rating });
          }}
          renderEmptyStar={(onClick) => {
            return (
              <button type="button" className="btn btn-link" onClick={onClick}>
                <FontAwesomeIcon icon={faStar} color="#bbb" size={size} />
              </button>
            );
          }}
          renderFilledStar={(onClick) => {
            return (
              <button type="button" className="btn btn-link" onClick={onClick}>
                <FontAwesomeIcon icon={faStar} color="yellow" size={size} />
              </button>
            );
          }}
        />
      </div>
    );
  }
}
