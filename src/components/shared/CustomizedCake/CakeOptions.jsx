
import React from "react";

const CakeOptions = ({ selectedOptions, handleOptionChange }) => {
  // Function to handle multiple toppings
  const handleToppingChange = (topping) => {
    const updatedToppings = selectedOptions.toppings.includes(topping)
      ? selectedOptions.toppings.filter((item) => item !== topping)
      : [...selectedOptions.toppings, topping];
    handleOptionChange("toppings", updatedToppings);
  };

  return (
    <div>
      {/* Flavor */}
      <div className="form-field">
        <label htmlFor="flavor">Choose Flavor</label>
        <select
          id="flavor"
          value={selectedOptions.flavor}
          onChange={(e) => handleOptionChange("flavor", e.target.value)}
        >
          <option value="">Select Flavor</option>
          <option value="vanilla">Vanilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="redVelvet">Red Velvet</option>
        </select>
      </div>

      {/* Size */}
      <div className="form-field">
        <label htmlFor="size">Choose Size</label>
        <select
          id="size"
          value={selectedOptions.size}
          onChange={(e) => handleOptionChange("size", e.target.value)}
        >
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* Toppings */}
      <div className="form-field">
        <label htmlFor="toppings">Choose Toppings</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.toppings.includes("chocolateChips")}
              onChange={() => handleToppingChange("chocolateChips")}
            />
            Chocolate Chips
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.toppings.includes("sprinkles")}
              onChange={() => handleToppingChange("sprinkles")}
            />
            Sprinkles
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.toppings.includes("fruits")}
              onChange={() => handleToppingChange("fruits")}
            />
            Fruits
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.toppings.includes("nuts")}
              onChange={() => handleToppingChange("nuts")}
            />
            Nuts
          </label>
        </div>
      </div>

      {/* Cake Color */}
      <div className="form-field">
        <label htmlFor="cakeColor">Choose Cake Color</label>
        <select
          id="cakeColor"
          value={selectedOptions.cakeColor}
          onChange={(e) => handleOptionChange("cakeColor", e.target.value)}
        >
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
        </select>
      </div>

      {/* Icing Type */}
      <div className="form-field">
        <label htmlFor="icingType">Choose Icing Type</label>
        <select
          id="icingType"
          value={selectedOptions.icingType}
          onChange={(e) => handleOptionChange("icingType", e.target.value)}
        >
          <option value="">Select Icing</option>
          <option value="buttercream">Buttercream</option>
          <option value="fondant">Fondant</option>
          <option value="whippedCream">Whipped Cream</option>
          <option value="chocolateGanache">Chocolate Ganache</option>
        </select>
      </div>
    </div>
  );
};

export default CakeOptions;
