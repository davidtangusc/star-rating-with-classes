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
    return (
      <div className="App">
        <StarRating
          value={this.state.rating}
          onClick={(rating) => {
            this.setState({ rating });
          }}
        />
      </div>
    );
  }
}
