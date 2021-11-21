import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";

export default function Cart( props ) {

 const { cartItem } = props;
  var totalPrice = 0;
  console.log("Props being received in Cart Component", cartItem);
  var cartArr=[];
  cartArr.push(cartItem)

  useEffect(() => {
    const { cartItem } = props;
    console.log("Props being received in Cart Component fromUse Effect", cartItem);
  }, [])

  return (
    <div className="main menu">
      <div>Cart Component</div>
      <Container>
        <h1>Cart</h1>
        <Table striped bordered hover responsive="sm">
          <tbody>
            {/* {cartArr &&
              cartArr.map((cartItem) => (
                <tr>
                  <td>
                    {cartItem.dishname}
                    <span>{cartItem.ingredients}</span>
                  </td>
                  <td>$ {cartItem.price}</td>
                </tr>
              ))} */}

            <tr>
              <td colSpan="2">Total</td>
              <td>$ {totalPrice}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
