import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cars from "./../data/car.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Props {}

const token: string =
  "?sp=r&st=2024-03-08T08:51:54Z&se=2029-03-08T16:51:54Z&spr=https&sv=2022-11-02&sr=c&sig=oBi5VKu1%2FJ2Zwkb2qe5vagdO6jEcdh0ZK0vlSDTOyYQ%3D";

const CarDetail: React.FC<Props> = () => {
  const [car, setCar] = useState<any>();

  const { id } = useParams();

  useEffect(() => {
    setCar(cars.find((x) => x.id === id));
  }, [id]);

  return (
    <>
      {" "}
      <section id="explore" className="explore">
        {car && (
          <>
            <div className="container text-left">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="text-left">
                  <h1>
                    {car.name} - {car.year}
                  </h1>
                  <span
                    style={{ marginTop: "8px" }}
                    className={`badge ${
                      car.inStock ? "bg-instock" : "bg-sold"
                    }`}
                  >
                    {car.inStock ? "in stock" : "sold"}
                  </span>
                </div>
                <div>
                  <div className="statistics-content">
                    <span>$</span>
                    <div className="counter">12000</div>
                  </div>
                </div>
              </div>
              <div className="col-md-10" style={{ marginTop: "24px" }}>
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
              <div className="col-md-2" style={{ marginTop: "24px" }}>
                <h3>Specifications</h3>
                <div className="flex-space-between">
                  <div className="text-left">Fuel type</div>
                  <div className="text-right">{car.fuelType}</div>
                </div>
                <div className="flex-space-between">
                  <div className="text-left">Engine</div>
                  <div className="text-right">{car.engine}</div>
                </div>
                <div className="flex-space-between">
                  <div className="text-left">Odometer</div>
                  <div className="text-right">{car.odometer}</div>
                </div>
                <div className="flex-space-between">
                  <div className="text-left">Transmission</div>
                  <div className="text-right">{car.transmission}</div>
                </div>
                <div className="flex-space-between">
                  <div className="text-left">Body Type</div>
                  <div className="text-right">{car.bodyType}</div>
                </div>
                <div className="flex-space-between">
                  <div className="text-left">Color</div>
                  <div className="text-right">{car.color}</div>
                </div>
                <div className="flex-space-between">
                  <div className="text-left">Interior</div>
                  <div className="text-right">{car.interior}</div>
                </div>
                <div className="flex-space-between">
                  <div className="text-left">Seats</div>
                  <div className="text-right">{car.seats}</div>
                </div>

                <h3 style={{ marginTop: "16px" }}>Feature highlights</h3>
                {car.features &&
                  car.features.map((feature: string) => {
                    return (
                      <p>
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/fluency/48/approval.png"
                          alt="approval"
                        />{" "}
                        {feature}
                      </p>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CarDetail;
