import React from "react";
import ArrowRight from "../../../../assets/img/arrow-right.svg";
import Brand1 from "../../../../assets/img/brand-1.svg";
import Brand2 from "../../../../assets/img/brand-2.svg";
import Brand3 from "../../../../assets/img/brand-3.svg";
import Brand4 from "../../../../assets/img/brand-4.svg";
import Brand5 from "../../../../assets/img/brand-5.svg";
import Brand6 from "../../../../assets/img/brand-6.svg";

const Bround = () => {
  return (
    <section id="brounds">
      <div className="container">
        <div className="row justify-content-between" style={{paddingTop: "50px"}}>
          <div className="column">
            <h2>Onlar bizə etibar edir</h2>
          </div>
          <div className="column">
            <a href="#" className="all">
              <span>Hamısı</span>
              <img
                src={ArrowRight}
                alt="Arrow Right"
                style={{
                  width: "20px",
                  height: "20px",
                  verticalAlign: "middle",
                  marginTop: "-3px",
                }}
              />
            </a>
          </div>
        </div>
        <div className="brounds">
          <div className="row w-100 m-0">
            <div className="col-2">
              <div className="img">
                <a href="#">
                  <img src={Brand1} alt="Bround 1" />
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="img">
                <a href="#">
                  <img src={Brand2} alt="Bround 2" />
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="img">
                <a href="#">
                  <img src={Brand3} alt="Bround 3" />
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="img">
                <a href="#">
                  <img src={Brand4} alt="Bround 4" />
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="img">
                <a href="#">
                  <img src={Brand5} alt="Bround 5" />
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="img">
                <a href="#">
                  <img src={Brand6} alt="Bround 6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bround;
