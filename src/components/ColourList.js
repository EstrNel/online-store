import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

function ColourList(props) {
  let setColor = "white";

  const changeButton = (id, listItem) => {
    document.getElementById(id).style.color = listItem;
  };

  // Ceate dropdown for each color
  const colorItem = props.colour.map((listItem) => (
    <Dropdown.Item
      key={listItem}
      title={listItem}
      eventKey={listItem}
      onClick={() => changeButton(props.id, listItem)}
    >
      {listItem}
    </Dropdown.Item>
  ));

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          id={props.id}
          style={{ color: setColor }}
          key={props.id}
        >
          Colour
        </Dropdown.Toggle>
        <Dropdown.Menu>{colorItem}</Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ColourList;
