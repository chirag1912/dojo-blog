import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import Cart from "./Cart.js";


export default function Menu() {
  const [menus, setmenus] = useState([
    {
      dishname: "Paneer Lababdar",
      ingredients: "Onion, Paneer, Capsicum",
      price: 19,
    },
    {
      dishname: "Paneer Tikka",
      ingredients: "Onion, Paneer, Capsicum",
      price: 24,
    },
  ]);
  const [cartItem, setCartItem] = useState([]);

//   oldArray => [...oldArray, newElement]
  return (
    <div>
      <div className="banner">
        {/* <Image src={food5} alt="Restaurant" /> */}
        <p>Restaurant Name</p>
      </div>
      <div className="main menu">
        <Container>
          <h1>Menu</h1>
          <Table striped bordered hover responsive="sm">
            <tbody>
              {menus.map((menu) => (
                <tr>
                  <td>
                    {menu.dishname} <span>{menu.ingredients}</span>
                  </td>
                  <td>$ {menu.price}</td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => setCartItem(oldArray => [...oldArray,menu])
                    }
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <div className="btns">
              <Link to="/" className="btn btn-dark">
                Home
              </Link>
            </div>
          </Row>

          {cartItem && <Cart cartItem={cartItem} />}
          
          <Link to="./cart">Go to Cart</Link>

          {/* <Link to={`./cart/${props.cartItem}`}>Go to Cart11</Link> */}


        </Container>
      </div>
    </div>
  );
}
