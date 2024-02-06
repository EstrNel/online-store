import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Cart reducer
import { addCart } from "../store/cartSlice";

import ColourList from "./ColourList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ShoppingCart(props) {
  // dispatch function to execute reducer functions
  const dispatch = useDispatch();

  // Use selector to retrieve list from state
  const cartItems = useSelector((state) => state.cartList);

  const toShow = () => {
    props.handleShowCart(true);
  };
  const buy = (price) => {
    props.handleCart(props.totalCart + price);
    //  alert(`Buying product ${price}`);
  };

  // Array to hold Products
  let listProduct = [];

  // Product Create Class
  // Must have 3 colour options
  class Product {
    constructor(id, title, description, price, picLoc, colour, pickColour) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.picLoc = picLoc;
      this.colour = colour;
      this.pickColour = pickColour;
      this.callback = function () {
        dispatch(
          addCart({
            id: id,
            title: title,
            price: price,
            picLoc: picLoc,
            pickColour: pickColour,
          })
        );
        return buy(price);
      };
    }
  }

  // Create 10 Product instances
  let product0 = new Product(
    0,
    "Soft Net Floral Embroidered Saree",
    "Soft Net Floral Embroidered Saree With Embroidered Border With Blouse",
    573.75,
    "pic0",
    ["red", "white", "blue"],
    "not specified"
  );
  let product1 = new Product(
    1,
    "Pansy Tiered Shirt Dress",
    "Our Pansy Tiered Shirt Dress in super soft voile features a shirt collar, matching fabric covered buttons from collar to hem, a soft tie belt hich can be detached,  3/4 split sleeves, 2 side pockets & a beautiful floaty 2 tiered skirt. ",
    2400.0,
    "pic1",
    ["yellow", "red", "black"],
    "not specified"
  );
  let product2 = new Product(
    2,
    "Floral Tiered Shirt Dress",
    "Our Floral Tiered Shirt Dress features a shirt collar, matching fabric covered buttons from collar to hem, a soft tie belt which can be detached, 3/4 split sleeves, 2 side pockets & a beautiful floaty 2 tiered skirt.  ",
    2400.0,
    "pic2",
    ["red", "green", "yellow"],
    "not specified"
  );
  let product3 = new Product(
    3,
    "Evening Dress",
    "This evening dress has short flounce sleeves with small shoulder pads for shape. Floor length. Made from stretchy fabric.",
    1200.0,
    "pic3",
    ["blue", "red", "white"],
    "not specified"
  );
  let product4 = new Product(
    4,
    "Lindsay Dress",
    "This stylish maxi dress features a tiered and panelled design crafted from a linen blend fabric. Perfect for special occasions or general outings.",
    645.0,
    "pic4",
    ["red", "white", "grey"],
    "not specified"
  );
  let product5 = new Product(
    5,
    "Jumpsuit",
    "Floral Print Straight Vacation Jumpsuit/Pantsuit Polyester Ankle-Length Dress Belt:No, Embellishment:Floral Print, Fabric:Polyester, Length:Ankle-Length, Neckline:Straight",
    893.0,
    "pic5",
    ["white", "red", "green"],
    "not specified"
  );
  let product6 = new Product(
    6,
    "Maroon Sleeveless dress",
    "Plain maroon dress, Lower Back, Thigh Out, Scuba Slight Stretch ",
    60.0,
    "pic6",
    ["black", "red", "pink"],
    "not specified"
  );
  let product7 = new Product(
    7,
    "Jacquard Cotton Silk Salwar Stitched",
    "Vredevogel Heavy Banarasi Cotton Silk Kurta Pant With Banarasi Silk Self Designed Dupatta, Straight Kurta Pant & Dupatta Has A Round Neck, Sleeveless, Straight Hem, And Side Slit. For A Party Wear Look. ",
    593.0,
    "pic7",
    ["white", "red", "black"],
    "not specified"
  );
  let product8 = new Product(
    8,
    "Melanie Open Back Maxi Dress with Slit",
    "Made in our super luxe DTY Spandex and featuring an open back and slit, Melanie is THAT girl! Pair her with cute sandals for a daytime look or sexy stilettos for a night out look",
    350.0,
    "pic8",
    ["purple", "red", "grey"],
    "not specified"
  );
  let product9 = new Product(
    9,
    "Leather Patch Rib Long Dress",
    "This dress from our all-new-in collection has a contemporary silhouette with a trendy appeal that you can easily dress up or down while still looking stylish and comfortable.",
    1799.0,
    "pic9",
    ["black", "red", "white"],
    "not specified"
  );

  // Push all Products to an array
  listProduct.push(product0);
  listProduct.push(product1);
  listProduct.push(product2);
  listProduct.push(product3);
  listProduct.push(product4);
  listProduct.push(product5);
  listProduct.push(product6);
  listProduct.push(product7);
  listProduct.push(product8);
  listProduct.push(product9);

  const cardProducts = listProduct.map((listProduct) => (
    <Col key={listProduct.id}>
      <Card style={{ width: "18rem", height: "500px" }}>
        <Card.Img
          variant="top"
          src={require(`../images/pic${listProduct.id}.png`)}
          height={100}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <Card.Body>
          <Card.Title>{listProduct.title}</Card.Title>
          <Card.Text>{listProduct.description}</Card.Text>
          <Card.Text>R{listProduct.price.toFixed(2)}</Card.Text>
          <Button variant="primary" onClick={listProduct.callback}>
            Buy
          </Button>
          <ColourList id={listProduct.id} colour={listProduct.colour} />
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <>
      {props.totalCart > 0 ? (
        <span
          style={{
            align: "right",
            color: "red",
            fontSize: "20px",
            font: "system-ui",
            float: "right",
          }}
        >
          Cart: R{props.totalCart.toFixed(2)}
        </span>
      ) : null}
      <h1>Products</h1>

      <Container fluid>
        <Row>{cardProducts}</Row>
      </Container>
    </>
  );
}

export default ShoppingCart;
