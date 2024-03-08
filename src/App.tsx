import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./App.css";

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
                <a className="navbar-brand" href="index.html">
                  list<span>race</span>
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
                  <li className=" scroll active">
                    <a href="#home">home</a>
                  </li>
                  <li className="scroll">
                    <a href="#works">how it works</a>
                  </li>
                  <li className="scroll">
                    <a href="#explore">explore</a>
                  </li>
                  <li className="scroll">
                    <a href="#reviews">review</a>
                  </li>
                  <li className="scroll">
                    <a href="#blog">blog</a>
                  </li>
                  <li className="scroll">
                    <a href="#contact">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </section>
      <section id="home" className="welcome-hero">
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>Parkar cars</h2>
            <p>Best place to find the right car for you</p>
          </div>
        </div>
      </section>

      <section id="explore" className="explore">
        <div className="container">
          <div className="section-header">
            <h2>our stock</h2>
            <p>
              Explore our collection of cars to find the right car lorem epsum
            </p>
          </div>
          <div></div>
          <div className="explore-content">
            <div className="row">
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div>
                    <Carousel showThumbs={false} dynamicHeight={true}>
                      <img
                        src="src/assets/images/cars/Toyota2.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota1.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota3.jpg"
                        alt="explore image"
                      />
                    </Carousel>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Toyota Prius Alpha</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span>Hybrid</span>
                      <span className="explore-price-box">
                        Price
                        <span className="explore-price"> $12,500</span>
                      </span>
                      <span>Blue</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div>
                    <Carousel showThumbs={false} dynamicHeight={true}>
                      <img
                        src="src/assets/images/cars/Toyota2.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota1.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota3.jpg"
                        alt="explore image"
                      />
                    </Carousel>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Toyota Prius Alpha</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span>Hybrid</span>
                      <span className="explore-price-box">
                        Price
                        <span className="explore-price"> $12,500</span>
                      </span>
                      <span>Blue</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div>
                    <Carousel showThumbs={false} dynamicHeight={true}>
                      <img
                        src="src/assets/images/cars/Toyota2.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota1.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota3.jpg"
                        alt="explore image"
                      />
                    </Carousel>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Toyota Prius Alpha</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span>Hybrid</span>
                      <span className="explore-price-box">
                        Price
                        <span className="explore-price"> $12,500</span>
                      </span>
                      <span>Blue</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div>
                    <Carousel showThumbs={false} dynamicHeight={true}>
                      <img
                        src="src/assets/images/cars/Toyota2.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota1.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota3.jpg"
                        alt="explore image"
                      />
                    </Carousel>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Toyota Prius Alpha</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span>Hybrid</span>
                      <span className="explore-price-box">
                        Price
                        <span className="explore-price"> $12,500</span>
                      </span>
                      <span>Blue</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div>
                    <Carousel showThumbs={false} dynamicHeight={true}>
                      <img
                        src="src/assets/images/cars/Toyota2.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota1.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota3.jpg"
                        alt="explore image"
                      />
                    </Carousel>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Toyota Prius Alpha</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span>Hybrid</span>
                      <span className="explore-price-box">
                        Price
                        <span className="explore-price"> $12,500</span>
                      </span>
                      <span>Blue</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div>
                    <Carousel showThumbs={false} dynamicHeight={true}>
                      <img
                        src="src/assets/images/cars/Toyota2.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota1.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota3.jpg"
                        alt="explore image"
                      />
                    </Carousel>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Toyota Prius Alpha</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span>Hybrid</span>
                      <span className="explore-price-box">
                        Price
                        <span className="explore-price"> $12,500</span>
                      </span>
                      <span>Blue</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div>
                    <Carousel showThumbs={false} dynamicHeight={true}>
                      <img
                        src="src/assets/images/cars/Toyota2.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota1.jpg"
                        alt="explore image"
                      />

                      <img
                        src="src/assets/images/cars/Toyota3.jpg"
                        alt="explore image"
                      />
                    </Carousel>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Toyota Prius Alpha</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span>Hybrid</span>
                      <span className="explore-price-box">
                        Price
                        <span className="explore-price"> $12,500</span>
                      </span>
                      <span>Blue</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
