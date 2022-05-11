import React from "react";
import Dollar from "../../../../assets/img/dollar-icon.svg";
import ArrowUp from "../../../../assets/img/arrow-up.svg";
import ArrowDown from "../../../../assets/img/arrow-down.svg";
import Euro from "../../../../assets/img/euro-icon.svg";

const ForYou = () => {
  return (
    <section id="for-you">
      <div className="container">
        <h2 className="for-you">Sizin üçün faydalı</h2>
        <div className="row w-100 m-0 cards">
          <div className="col-6">
            <div className="box">
              <div className="title d-flex justify-content-between">
                <p>Valyuta məzənnələri</p>
                <p>
                  <span>Yeniləndi:</span> 14.03.2022
                </p>
              </div>
              <table className="table m-0 w-100">
                <thead>
                  <tr>
                    <th scope="col">Valyuta</th>
                    <th scope="col">Alış</th>
                    <th scope="col">Satış</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="img">
                      <div className="d-flex">
                        <img src={Dollar} className="currency" alt="USD" />
                        <p className="ms-2 mt-2">USD</p>
                      </div>
                    </td>
                    <td>
                      <p className="ms-2 mt-2">1.7000</p>
                    </td>
                    <td>
                      <p className="ms-2 mt-2">1.7025</p>
                    </td>
                    <td>
                      <img src={ArrowUp} alt="" className="arrow mt-2" />
                    </td>
                  </tr>
                  <tr>
                    <td className="img">
                      <div className="d-flex">
                        <img
                          src={Euro}
                          className="currency"
                          alt="EUR"
                        />
                        <p className="ms-2 mt-2">EUR</p>
                      </div>
                    </td>
                    <td>
                      <p className="ms-2 mt-2">1.7000</p>
                    </td>
                    <td>
                      <p className="ms-2 mt-2">1.9000</p>
                    </td>
                    <td>
                      <img src={ArrowDown} alt="" className="arrow mt-2" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-6">
            <div className="box second">
              <div className="title valyuta">
                <p>Valyuta kalkulyatoru</p>
              </div>
              <div className="valyuta">
                <form action="#" method="post">
                  <div className="line row w-100 m-0 justify-content-between">
                    <div className=" col-9 p-0">
                      <input
                        type="text"
                        className="form-control"
                        id="satiram"
                        placeholder="Satıram"
                      />
                    </div>
                    <div className="col-3 p-0">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>₼</option>
                        <option value={1}>$</option>
                      </select>
                    </div>
                  </div>
                  <div className="line row w-100 m-0 justify-content-between">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        id="satiram"
                        placeholder="Alıram"
                      />
                    </div>
                    <div>
                      <select
                        className="form-select second"
                        aria-label="Default select example"
                      >
                        <option selected>$</option>
                        <option value={1}>₼</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
