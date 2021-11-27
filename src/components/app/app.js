import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../home/";
import Nav from "../nav/";
import News from "../news/";
import Profile from "../profile/";
import Post from "../post/";

const App = () => {
    return (
    <Router>
        <div>
          <Nav/>
          <hr />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/news/' element={<News/>} />
            <Route path='/news/:id' element={<Post/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
        </div>
    </Router>
    )
  }

export default App;