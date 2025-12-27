import img from "../../assets/avataaars.svg";
export default function Home() {
  return (
   <>
   <div className="section bg-second-color vh-100">
    <div className="container">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-md-10">
        <div className="home-content text-white text-center">
        <div className="mb-4">
            <img src={img}  alt="avatar" className="img-fluid"style={{ width: "250px" }}/> 
          </div>
          <h1 className="mb-2 fw-bold fs-1">start Framework</h1>
          <div className="mb-2 star position-relative"><i className="fa-solid fa-star"></i></div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </div>
      </div>
    </div>
   </div>

   </>
  )
}
