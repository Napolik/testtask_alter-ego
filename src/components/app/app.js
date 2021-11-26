import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "../home/";
import Nav from "../nav/nav";
import News from "../news/news";
import Profile from "../profile/profile";

const App = () => {
    return (
        <Router>
          <div>
          <Nav/>
            <hr />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
      </div>
    </Router>
    )
  }

export default App;