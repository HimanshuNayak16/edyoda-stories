import React, { Component } from "react";
import Posts from "./components/Posts/Posts";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Filter from "./components/Filter/Filter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Topbar />
          </nav>
        </header>
        <main>
          <Filter />
          <Posts />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
