import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
// import { useGetUserInfo } from "./pages/useGetUserInfo";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const {name, profilePhoto} = useGetUserInfo();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
      <div className="logo">
        <h1 style={{marginLeft:-570}}><Link to="/">MyBlog</Link></h1>
      </div>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
      {/* {
      isAuth?<div className="profile">
        <h3>Yeh you are logged in</h3>
      </div>:<div className="login_btn"><label>Please Login to create your blog</label><button><Link to="/login">Login</Link></button></div>
      } */}
    </Router>
  );
}

export default App;