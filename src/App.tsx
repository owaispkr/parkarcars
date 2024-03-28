import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <section className="top-area">
        <div className="header-area">
          <nav
            className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
            data-minus-value-desktop="70"
            data-minus-value-mobile="55"
            data-speed="1000"
          >
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="/parkarcars/">
                  PARKAR <span> cars</span>
                </a>
              </div>

              <div
                className="collapse navbar-collapse menu-ui-design"
                id="navbar-menu"
              >
                <ul
                  className="nav navbar-nav navbar-right"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li className="scroll">
                    <a href="/parkarcars/about/">About us</a>
                  </li>
                  <li className="scroll">
                    <a href="/parkarcars/contact/">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </section>
      <BrowserRouter>
        <Routes>
          <Route index path="/parkarcars/" element={<Home />} />
          <Route index path="/parkarcars/:id/" element={<CarDetail />} />
          <Route index path="/parkarcars/about/" element={<About />} />
          <Route index path="/parkarcars/contact/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
