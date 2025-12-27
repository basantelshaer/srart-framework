import "./Footer.css"
export default function Footer() {
  return (
   <>
  <footer className=" bg-main-color ">
   <div className="container py-3">
    <div className="row py-5">
      <div className="col-md-4">
        <div className="text-white text-center">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
      </div>
      <div className="col-md-4">
        <h3 className="text-white text-center ">
          AROUND THE WEB
        </h3>
    <div className="social-links d-flex text-white ">
     <div>
     <i className="fa-brands fa-facebook-f"></i>
     </div>
     <div>
      <i className="fa-brands fa-twitter"></i>
     </div>
     <div>
      <i className="fa-brands fa-linkedin-in"></i>
     </div>
      <div>
     <i className="fa-brands fa-dribbble"></i>
      </div>   
    </div>
      </div>
      <div className="col-md-4 text-white text-center">
        <h3>ABOUT FREELANCER </h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        
      </div>
    </div>
    </div>
    <div className="copy-right text-center text-white py-3"> 
     <p className="text-white m-0 py-2">
       Copyright © Your Website 2021
     </p>
    </div>
   </footer>
   </>
  )
}
