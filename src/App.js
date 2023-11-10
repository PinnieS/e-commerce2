import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Cart from './Cart';

function App() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isLogin, setIsLogin] = useState(false);
      
        const handleEmailChange = (e) => {
          setEmail(e.target.value);
        };
      
        const handlePasswordChange = (e) => {
          setPassword(e.target.value);
        };
      
        const handleLogin = () => {
          if (isLogin) {
            setIsLogin(false);
          } else {
            if (email && password) {
              setIsLogin(true);
            } else {
              alert("Please enter a username and password.");
            }
          }
          console.log("Email: ", email);
          console.log("Password: ", password);
        };
      
    

        return(
        <Home />
        // <Login />
        // <Cart />
        );
}

export default App;
