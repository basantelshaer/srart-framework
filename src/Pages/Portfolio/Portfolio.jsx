import { useState } from "react";
import img1 from '../../images/port1.png'
import img2 from '../../images/port2.png'
import img3 from '../../images/port3.png'
import './portfolio.css'

export default function Portfolio() {

  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { path: img1, id: "port1" },
    { path: img2, id: "port2" },
    { path: img3, id: "port3" },
    { path: img1, id: "port4" },
    { path: img2, id: "port5" },
    { path: img3, id: "port6" },
  ];

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">

            <div className="text-center main-color mb-4">
              <h1 className="text-uppercase fw-bold mt-3">
                portfolio component
              </h1>
              <div className="mb-2 star star-dark position-relative">
                <i className="fa-solid fa-star"></i>
              </div>
            </div>

            {images.map((img) => (
              <div className="col-md-4 gy-5 mb-4" key={img.id}>
                <div
                  className="image-card position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal"
                  onClick={() => setSelectedImg(img)}
                >
                  <img
                    src={img.path}
                    className="w-100 rounded-2"
                    alt={img.id}
                  />

                  <div className="layer bg-second-color rounded-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-3x text-white"></i>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="portfolioModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              {selectedImg && (
                <img
                  src={selectedImg.path}
                  alt={selectedImg.id}
                  className="w-100"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
