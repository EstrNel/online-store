import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// Display user purchases,selection and the total cost

// Cart reducer
import { addCart } from "../store/cartSlice";

// Bootstrap screen displays
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

// Modal display of additional shipping information
import Modal from "./InfoModal";

// Icons displayed on buttons
import { GoInfo } from "react-icons/go";

function Cart(props) {
  // dispatch function to execute reducer functions
  const dispatch = useDispatch();

  // Use selector to retrieve list from state
  const cartItems = useSelector((state) => state.cartList);

  // Set Edit Modal input as Closed
  const [isOpen, setIsOpen] = useState(false);

  // Open Modal info when info button is selected
  const handleInfo = () => {
    setIsOpen(true);
  };

  // Compile table with Cart items selected
  const showCartList = cartItems.map((item) => (
    <Row key={item.cartId}>
      <Col sm={2}>
        <img src={require(`../images/${item.prodLoc}.png`)} height={80} />
      </Col>
      <Col sm={4}>{item.prodTitle}</Col>
      <Col sm={1}>{item.prodPrice.toFixed(2)}</Col>
    </Row>
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
      <br />
      <br />
      <br />
      <hr />
      <Container style={{ maxHeight: "400px", overflowY: "auto" }}>
        {showCartList}
      </Container>
      <hr />

      <InputGroup className="mb-3">
        <InputGroup.Text>Shipping Method</InputGroup.Text>
        <Form.Select aria-label="Shipping Method">
          <option value="1">Expedited</option>
          <option value="2">Overnight</option>
          <option value="3">Priority Mail</option>
          <option value="4">Flat rate</option>
          <option value="5">Multiple addresses</option>
          <option value="6">Local delivery or pickup</option>
          <option value="7">Local Freight</option>
        </Form.Select>
        <Button variant="info" onClick={handleInfo} style={{ float: "right" }}>
          <GoInfo style={{ fontSize: "20px" }} />
        </Button>
      </InputGroup>

      <Modal
        id="modalShowInfo"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "300px",
          height: "200px",
          padding: "20px",
          border: "1px",
          zIndex: "1000",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={{ backgroundColor: "lightblue", zIndex: "1000" }}>
          <h1>Shipping Methods</h1>
          <h2>Expedited</h2>
          <p>
            Expedited is a blanket term that means faster than the standard
            shipping time. Each carrier will have its own unique branded names
            for expedited shipping, as well as definitions for what those terms
            mean. What goes for one carrier may not go for another.
          </p>
          <h2>Overnight</h2>
          <p>
            overnight means the package will arrive the day after it is shipped.
          </p>
          <h2>Priority Mail</h2>
          <p>
            Priority Mail generally ships in 1 to 3 business days depending on
            the origin and destination.{" "}
          </p>

          <h2>Flat rate</h2>
          <p>
            While typical shipping costs dependon a package’s size, shape, and
            weight, flat rate shipping eliminates all the variations. Instead,
            you pay a single, flat rate every time you ship a specific-sized box
            issued by the carrier. It does not matter how heavy the box is — you
            can stuff as many items as possible into it, and still pay the
            carrier’s flat rate. Flat rate shipping can save you money in the
            long run if you’re shipping heavy items or multiple items inside one
            box. Just keep in mind that if your packages tend to be on the
            lighter side, flat rate shipping may actually cause you to lose
            money. This is because, generally speaking, the pricing is padded by
            carriers to cover heavier items.
          </p>

          <h2>Multiple addresses</h2>
          <p>
            While multiple addresses is not technically a type of shipping
            service, it is still a question that comes up for many commerce and
            ecommerce store owners. This term refers to letting a customer send
            different items in a single order to different destination
            addresses. For example, they might buy a t-shirt for themselves and
            a t-shirt as a gift for their friend, but purchase them both through
            the same order on your site. Another use for multiple addresses is
            when a customer would like to combine different fulfillment methods
            to collect their items, like standard shipping, local delivery,
            in-store pickup, and digital delivery of a gift card.
          </p>

          <h2>Local delivery or pickup</h2>
          <p>
            If you are a local business selling to customers in your area, you
            may have the option to skip shipping altogether. With local
            delivery, you can go into your Shopify dashboard and set a specific
            radius around your store or warehouse. If a customer’s address is
            within that zone, they automatically become eligible for local
            delivery.
          </p>

          <h2>International</h2>
          <p>
            International shipping t originates from a different country than
            the destination. Involves Customs declarations and forms, which tell
            customs officers in the destination country what’s inside, the cost
            or value, and whether it is merchandise or a gift. Applicable taxes,
            tariffs, and duties. Keep in mind that your customer will be
            responsible for any extra customs fees.{" "}
          </p>
          <h2>Freight</h2>
          <p>
            Freight is the primary type of delivery service used for shipping
            large quantities of goods, typically sent on pallets and in shipping
            containers. Generally speaking, a shipment is considered freight if
            it weighs more than 150 pounds or is larger than 30 x 30 x 30
            inches.
          </p>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
