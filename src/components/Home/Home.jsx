import React, { Component } from "react";
import Filter from "../Filter/Filter";
import Posts from "../Posts/Posts";

export class Home extends Component {
  render() {
    return (
      <div>
        <Filter />
        <Posts posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
