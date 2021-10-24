import React from "react";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 2,
    };
  }

  render() {
    let filledColor = "green";

    if (this.state.rating === 3) {
      filledColor = "orange";
    } else if (this.state.rating < 3) {
      filledColor = "red";
    }

    return (
      <div className="App">
        <StarRating
          value={this.state.rating}
          onClick={(rating) => {
            this.setState({ rating });
          }}
          emptyColor="#ccc"
          filledColor={filledColor}
          size="3x"
        />
      </div>
    );
  }
}
