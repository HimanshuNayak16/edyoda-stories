import React, { Component } from "react";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import { posts } from "./posts";
import { PostPage } from "./components/PostPage/PostPage";

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
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              {posts.map((post) => {
                return (
                  <Route
                    key={post.postId}
                    path={`/${post.postPath}`}
                    element={<PostPage post={post} />}
                  ></Route>
                );
              })}
            </Routes>
          </HashRouter>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
