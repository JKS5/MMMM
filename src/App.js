import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Mypage from "./pages/Mypage/Mypage";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import PlusButton from "./components/ScrollButton/PlusButton";
import Writing from "./pages/writing/Writing";
import Footer from "./pages/Footer/Footer";
import MyinfoModify from "./pages/MyinfoModify.jsx/MyinfoModify";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/mypage" exact>
            <Mypage isLogin={isLogin} />
          </Route>
          <Route path="/login" exact>
            <Signup />
          </Route>
          <Route path="/modifyinfo">
            <MyinfoModify />
            {/* <Mypage handleContent={revise} info={info} setInfo={setInfo} /> */}
          </Route>
          <Route path="/writing">
            <Writing />
          </Route>
        </Switch>
        <PlusButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
