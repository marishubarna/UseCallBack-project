import React, { memo } from "react";

const ListItem = memo(({ name }) => {
  console.log(`Rendering Items: ${name}`);
  return <li>{name}</li>;
});

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} city={item.city} name={item.name} />
      ))}
    </ul>
  );
};

export default ItemList;
