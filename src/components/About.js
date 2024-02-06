import React from "react";
import Figure from "react-bootstrap/Figure";

function About(props) {
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
      <Figure>
        <Figure.Image
          src={require(`../images/ShopLogo.png`)}
          height={180}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <Figure.Caption>
          Up to 60% Off over 500 Designer Labels at South Africa's Biggest
          Online Shopping Society. Shop Clothing, Accessories & Homeware Online
          up to 70% Off. Great Customer Service. Membership is Free
        </Figure.Caption>
        <Figure.Caption>
          <span>
            <Figure.Image
              src={require(`../images/Brands1.png`)}
              height={180}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />{" "}
          </span>
          <span>
            {" "}
            <Figure.Image
              src={require(`../images/Brands2.png`)}
              height={180}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </span>
        </Figure.Caption>
        <Figure.Caption>
          <a
            href="mailto:estr.nel@gmail.com?Subject=My%20Portfolio"
            target="_top"
          >
            Contact us
          </a>
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default About;
