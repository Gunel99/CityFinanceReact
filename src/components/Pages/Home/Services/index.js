import React from "react";
import Slider from "react-slick";
import SecondaryImg1 from "../../../../assets/img/service-secondary-img-1.svg";
import SecondaryImg2 from "../../../../assets/img/service-secondary-img-2.svg";
import SecondaryImg3 from "../../../../assets/img/service-secondary-img-3.svg";
import MainImg1 from "../../../../assets/img/service-main-img-1.svg";
import MainImg2 from "../../../../assets/img/service-main-img-2.svg";
import MainImg3 from "../../../../assets/img/service-main-img-3.svg";
import MainImg4 from "../../../../assets/img/service-main-img-4.svg";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 7000,
    slidesToShow: 4,
    slidesToScroll: 4,
    delay: 3000,
  };

  return (
    <section id="services">
      <div className="container">
        <h2>Xidmətlərimiz</h2>
        <Slider {...settings} className="services relative">
          <div className="service">
            <div className="service-image first-section relative">
              <img
                src={SecondaryImg1}
                className="secondary-img"
              />
              <img
                src={MainImg1}
                className="main-img main-img-1 absolute"
                alt="Service 1"
              />
            </div>
            <div className="service-content">
              <h6>Avtokredit</h6>
              <div className="d-flex justify-content-between">
                <p className="body-medium-2">
                  <span>Müddət:</span> 1-3 il
                </p>
                <p className="body-medium-2">
                  <span>Valyuta:</span> ₼
                </p>
              </div>
              <div>
                <a href="#" className="button order d-block w-100 text-center">
                  Sifariş et
                </a>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-image second-section relative">
              <img
                src={SecondaryImg2}
                className="secondary-img"
              />
              <img
                src={MainImg2}
                className="main-img main-img-2 absolute"
                alt="Service 2"
              />
            </div>
            <div className="service-content">
              <h6>Mikrokredit</h6>
              <div className="d-flex justify-content-between">
                <p className="body-medium-2">
                  <span>Müddət:</span> 1-3 il
                </p>
                <p className="body-medium-2">
                  <span>Valyuta:</span> ₼
                </p>
              </div>
              <div>
                <a href="#" className="button order d-block w-100 text-center">
                  Sifariş et
                </a>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-image third-section relative">
              <img
                src={SecondaryImg3}
                className="secondary-img"
              />
              <img
                src={MainImg3}
                className="main-img main-img-3 absolute"
                alt="Service 3"
              />
            </div>
            <div className="service-content">
              <h6>İstehlak krediti</h6>
              <div className="d-flex justify-content-between">
                <p className="body-medium-2">
                  <span>Müddət:</span> 1-3 il
                </p>
                <p className="body-medium-2">
                  <span>Valyuta:</span> ₼
                </p>
              </div>
              <div>
                <a href="#" className="button order d-block w-100 text-center">
                  Sifariş et
                </a>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-image fourth-section relative">
              <img
                src={SecondaryImg2}
                className="secondary-img"
              />
              <img
                src={MainImg4}
                className="main-img main-img-4 absolute"
                alt="Service 4"
              />
            </div>
            <div className="service-content">
              <h6>Lombard krediti</h6>
              <div className="d-flex justify-content-between">
                <p className="body-medium-2">
                  <span>Müddət:</span> 1-3 il
                </p>
                <p className="body-medium-2">
                  <span>Valyuta:</span> ₼
                </p>
              </div>
              <div>
                <a href="#" className="button order d-block w-100 text-center">
                  Sifariş et
                </a>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-image first-section relative">
              <img
                src={SecondaryImg1}
                className="secondary-img"
              />
              <img
                src={MainImg1}
                className="main-img main-img-1 absolute"
                alt="Service 1"
              />
            </div>
            <div className="service-content">
              <h6>Avtokredit</h6>
              <div className="d-flex justify-content-between">
                <p className="body-medium-2">
                  <span>Müddət:</span> 1-3 il
                </p>
                <p className="body-medium-2">
                  <span>Valyuta:</span> ₼
                </p>
              </div>
              <div>
                <a href="#" className="button order d-block w-100 text-center">
                  Sifariş et
                </a>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-image second-section relative">
              <img
                src={SecondaryImg2}
                className="secondary-img"
              />
              <img
                src={MainImg2}
                className="main-img main-img-2 absolute"
                alt="Service 2"
              />
            </div>
            <div className="service-content">
              <h6>Mikrokredit</h6>
              <div className="d-flex justify-content-between">
                <p className="body-medium-2">
                  <span>Müddət:</span> 1-3 il
                </p>
                <p className="body-medium-2">
                  <span>Valyuta:</span> ₼
                </p>
              </div>
              <div>
                <a href="#" className="button order d-block w-100 text-center">
                  Sifariş et
                </a>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-image third-section relative">
              <img
                src={SecondaryImg3}
                className="secondary-img"
              />
              <img
                src={MainImg3}
                className="main-img main-img-3 absolute"
                alt="Service 3"
              />
            </div>
            <div className="service-content">
              <h6>İstehlak krediti</h6>
              <div className="d-flex justify-content-between">
                <p className="body-medium-2">
                  <span>Müddət:</span> 1-3 il
                </p>
                <p className="body-medium-2">
                  <span>Valyuta:</span> ₼
                </p>
              </div>
              <div>
                <a href="#" className="button order d-block w-100 text-center">
                  Sifariş et
                </a>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-image fourth-section relative">
              <img
                src={SecondaryImg2}
                className="secondary-img"
              />
              <img
                src={MainImg4}
                className="main-img main-img-4 absolute"
                alt="Service 4"
              />
            </div>
            <div className="service-content">
              <h6>Lombard krediti</h6>
              <div className="d-flex justify-content-between">
                <p className="body-medium-2">
                  <span>Müddət:</span> 1-3 il
                </p>
                <p className="body-medium-2">
                  <span>Valyuta:</span> ₼
                </p>
              </div>
              <div>
                <a href="#" className="button order d-block w-100 text-center">
                  Sifariş et
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
