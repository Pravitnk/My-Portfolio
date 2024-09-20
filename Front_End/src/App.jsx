import "./App.css";
import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import AdminLogin from "./components/admin/AdminLogin";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./reducers/loingUser";
import { getUser } from "./reducers/userReducer3";
import AdminPanel from "./components/admin_panel/AdminPanel";
import Timeline from "./components/admin_panel/Timeline";
import Youtube from "./components/admin_panel/Youtube";
import Project from "./components/admin_panel/Projects";
import Loader from "./components/loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.users);
  console.log(user);

  const { isAuthenticated } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <Home
                    youtubes={user.youtube}
                    timelines={user.timeline}
                    skills={user.skills}
                  />
                ) : (
                  <div>No user data available</div>
                )
              }
            />

            <Route
              path="/about"
              element={
                user ? (
                  <About about={user.about} />
                ) : (
                  <div>No user data available</div>
                )
              }
            />

            <Route
              path="/projects"
              element={
                user ? (
                  <Projects projects={user.projects} />
                ) : (
                  <div>No user data available</div>
                )
              }
            />
            <Route path="/contacts" element={<Contact />} />
            <Route
              path="/Account"
              element={isAuthenticated ? <AdminPanel /> : <AdminLogin />}
            />

            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <AdminLogin />}
            />

            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <AdminLogin />}
            />

            <Route
              path="/admin/projects"
              element={isAuthenticated ? <Project /> : <AdminLogin />}
            />
          </Routes>
          <Footer />
        </>
      )}
      <Toaster position="bottom-center" />
    </Router>
  );
}

export default App;
