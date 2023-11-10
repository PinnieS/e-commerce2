import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Cart from "./Cart";

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  const handleCartClick = () => {
    setCurrentPage("cart");
    console.log(currentPage);
    
  };


  const handleAddToCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.title === item.title);

    if (itemIndex !== -1) {
      // If the item is already in the cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity++;
      setCartItems(updatedCartItems);

    } else {
      // If the item is not in the cart, add it with a quantity of 1
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };


  useEffect(() => {
    axios.get("https://dummyjson.com/products?select=title,price,description,images").then((res) => {
      setProducts(res.data.products);
    });
  }, []);


  const filteredProducts = products.filter((product) => {
    const lowerCaseTitle = product.title.toLowerCase();
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return lowerCaseTitle.includes(lowerCaseSearchQuery);
  });


  

  return (
    <div className="container">
      {currentPage === 'home' ? (
        <div className="p-3 mb-2 bg-light text-white">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                E-Commerce
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Cart
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <div className="container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <div className="row">
              {filteredProducts.map((product) => (
                <Card key={product.title} style={{ width: "18rem", margin: "20px", border: "solid 2px" }}>
                  <Card.Img variant="top" src={product.images[0]} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Subtitle>${product.price}</Card.Subtitle>
                    <Button className="btn-primary" onClick={() => handleCartClick(product)} variant="primary">
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ) : null}
        {currentPage === 'cart' ? <Cart /> : null }  
    </div>
  );
}

export default Home;