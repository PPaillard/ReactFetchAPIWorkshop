import React from "react";

const CoffeeCard = ({ coffee }) => {
  if (coffee)
    return (
      <div>
        <h2>Name : {coffee.blend_name}</h2>
        <h2>Notes : {coffee.notes}</h2>
      </div>
    );
  return null;
};

export default CoffeeCard;
