import React from "react";
import Figure from "react-bootstrap/Figure";

function Landing(props) {
  return (
    <>
      <br />
      <br />
      <br />
      <Figure>
        <Figure.Image
          src={require(`../images/ShopLogo.png`)}
          height={180}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <Figure.Caption>
          Shop at leisure from the comfort of your home.
          <br />
          Watch out for specials.
          <br /> Membership is Free
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default Landing;
