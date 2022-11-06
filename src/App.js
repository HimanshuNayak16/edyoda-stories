import React, { Component } from "react";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { posts } from "./posts";
import { PostPage } from "./components/PostPage/PostPage";

class App extends Component {
  state = {
    posts: posts,
  };
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Topbar />
          </nav>
        </header>
        <main>
          <BrowserRouter>
            <Routes>
              <Route
                path=""
                element={<Home posts={this.state.posts} />}
              ></Route>
              {this.state.posts.map((post) => {
                return (
                  <Route
                    key={post.postId}
                    path={`/${post.postPath}`}
                    element={<PostPage post={post} />}
                  ></Route>
                );
              })}
            </Routes>
          </BrowserRouter>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
