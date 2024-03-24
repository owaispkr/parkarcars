import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cars from "./../data/car.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const token: string =
  "?sp=r&st=2024-03-08T08:51:54Z&se=2029-03-08T16:51:54Z&spr=https&sv=2022-11-02&sr=c&sig=oBi5VKu1%2FJ2Zwkb2qe5vagdO6jEcdh0ZK0vlSDTOyYQ%3D";

const Home: React.FC<Props> = () => {
  const [loaded, setLoaded] = useState<number>(6);
  const [loadedCars, setLoadedCars] = useState<any[]>(cars.slice(0, loaded));

  const navigate = useNavigate();

  useEffect(() => {
    setLoadedCars(cars.slice(0, loaded));
  }, [loaded]);

  return (
    <>
      {" "}
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
              {loadedCars.map((car) => {
                return (
                  <div key={car.id} className=" col-md-4 col-sm-6">
                    <div className="single-explore-item">
                      <div>
                        <Carousel showThumbs={false} dynamicHeight={true}>
                          {car.pictures &&
                            car.pictures.map((pic: any, index: number) => {
                              return (
                                <img
                                  key={index}
                                  src={`${pic}${token}`}
                                  alt="explore image"
                                />
                              );
                            })}
                        </Carousel>
                      </div>
                      <div className="single-explore-txt bg-theme-1">
                        <div className="text-left">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div>
                              <h2
                                onClick={() => {
                                  navigate(`/${car.id}/`);
                                }}
                              >
                                {car.name}
                              </h2>
                            </div>
                            <div>
                              <h2 className="car-price">${car.price}</h2>
                            </div>
                          </div>
                          <h4 style={{ paddingTop: "8px" }}>{car.year}</h4>
                        </div>
                        <div className="explore-rating-price">
                          <span>
                            <img
                              style={{ marginRight: "8px" }}
                              width="36"
                              height="36"
                              src="https://img.icons8.com/arcade/64/engine.png"
                              alt="engine"
                            />
                            1800 CC
                          </span>
                          <div className="boundary">&nbsp;</div>
                          <span>Hybrid</span>
                          <span className="boundary">&nbsp;</span>
                          <span>
                            <img
                              style={{ marginRight: "8px" }}
                              width="36"
                              height="36"
                              src="https://img.icons8.com/color/48/speed.png"
                              alt="speed"
                            />
                            {car.odometer}
                          </span>
                        </div>
                        <div className="text-left">
                          <span
                            className={`badge ${
                              car.inStock ? "bg-instock" : "bg-sold"
                            }`}
                          >
                            {car.inStock ? "in stock" : "sold"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="button loadmore"
              onClick={() => {
                setLoaded(loaded + 3);
              }}
              disabled={cars.length < loaded}
            >
              Load more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
