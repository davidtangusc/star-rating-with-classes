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
        >
          {(onClick, isFilled) => {
            return (
              <button type="button" className="btn btn-link" onClick={onClick}>
                <FontAwesomeIcon
                  icon={faStar}
                  color={isFilled ? "yellow" : "#bbb"}
                  size={size}
                />
              </button>
            );
          }}
        </StarRating>
      </div>
    );
  }
}
