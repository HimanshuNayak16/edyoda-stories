import React, { Component } from "react";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import PostPage from "./components/PostPage/PostPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { HashRouter, Routes, Route } from "react-router-dom";
import { posts } from "./posts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <header>
            <nav>
              <Topbar />
            </nav>
          </header>
          <main>
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
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </HashRouter>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
