import React, { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Home from './Home';



function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [isError, setisError] = useState(false);
    const [currentPage, setCurrentPage] = useState("login")


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

   

        
    const handleHomeClick = () => {
      if (email === "admin" && password === "admin") {
        alert("Login Success")
        setIsLogin(true);
        setCurrentPage('home');
      } else {
        alert("Email dan Password Salah")
        setisError("true");
        
      }

      console.log(currentPage);
      
    }


  return (
    <div>
      {currentPage === 'login'?
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div>
                <form>
                  <div className="text-center">
                    <h3>LOGIN</h3>
                    <div className="form-group mt-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Password</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="form-control mt-1"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <p>or <a href="#">Sign up?</a></p>
                    </div>

                    <div className="d-grid gap-2 mt-3">
                      <button type="submit"  className="btn btn-dark" onClick={handleHomeClick}>LOGIN
                      </button>
                    </div>
                    <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div> : null
}   {currentPage === 'home' ? <Home /> : null }   

    </div>
  )
}

export default Login;