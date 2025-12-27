import { useState } from 'react'
import "./Contact.css"
export default function Contact() {
  const [name, setName] = useState("");
  const [age,setage]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  return (
   <>
   <div className="section ">
    <div className="container">
      <div className="row ">
        <div className="text-center main-color mb-5">
        <h1 className=" text-uppercase fw-bold mt-3">contact section</h1>
        <div className="mb-2 star star-dark position-relative">
        <i className="fa-solid fa-star"></i>
        </div>
        </div>
            <div className="col-md-7 justify-content-center mx-auto">
              <form>
                <div className="form-group my-4 mt-4">
                  {name?<label htmlFor="userName">User Name</label>:""}
                  <input type="text" className="form-control border-0 border-bottom" onChange={(e)=>setName(e.target.value)} 
                   id="userName" placeholder="user Name" value={name} />
                </div>
                <div className="form-group my-4">
                  {age?<label htmlFor="userAge">User Age</label>:""}
                  <input type="number" className="form-control  border-0 border-bottom" onChange={(e)=>setage(e.target.value)} 
                  id="userAge" placeholder="user Age" value={age} />
                </div>
                <div className="form-group my-4">
                  {email?<label htmlFor="userEmail">User Email</label>:""}
                  <input type="email" className="form-control  border-0 border-bottom" onChange={(e)=>setemail(e.target.value)} 
                  id="userEmail" placeholder="user Email" value={email} />
                </div>
                <div className="form-group my-4">
                  {password?<label htmlFor="userPassword">User Password</label>:""}
                  <input type="password" className="form-control  border-0 border-bottom" onChange={(e)=>setpassword(e.target.value)}
                   id="userPassword" placeholder="user Password" value={password} />
                </div>
              </form>
            </div>
      </div>
    </div>
   </div>
   </>
  )
}
