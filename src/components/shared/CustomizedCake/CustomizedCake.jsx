
import React, { useState } from "react";
import CakeOptions from "./CakeOptions"; // Ensure that CakeOptions includes the options for flavor, size, toppings, cakeColor, icingType
import SummaryModal from "./SummaryModal";
import "./CustomizedCake.css";

const CustomizedCake = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    flavor: "",
    size: "",
    toppings: [],
    cakeColor: "",
    icingType: "",
  });

  const [showModal, setShowModal] = useState(false);

  // Update option values dynamically
  const handleOptionChange = (field, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Update topping values dynamically
  const handleToppingChange = (topping) => {
    setSelectedOptions((prev) => {
      const toppings = prev.toppings.includes(topping)
        ? prev.toppings.filter((item) => item !== topping)
        : [...prev.toppings, topping];
      return { ...prev, toppings };
    });
  };

  // Form submission logic
  const handleSubmit = () => {
    if (
      !selectedOptions.flavor ||
      !selectedOptions.size ||
      !selectedOptions.cakeColor ||
      !selectedOptions.icingType
    ) {
      alert("Please select all options!");
      return;
    }
    setShowModal(true);
  };

  // Close modal and allow editing
  const handleEdit = () => {
    setShowModal(false);
  };

  return (
    <div className="customized-cake-page">
      <h1>Customize Your Cake</h1>
      {!showModal && (
        <>
          <div className="cake-options">
            <CakeOptions
              selectedOptions={selectedOptions}
              handleOptionChange={handleOptionChange}
              handleToppingChange={handleToppingChange}
            />
          </div>

          {/* <button className="submit-button" onClick={handleSubmit}>
            Submit Your Cake
          </button> */}
          <button
            className="submit-button"
            onClick={() => {
              handleSubmit();
              alert("Your Customized Cake Placed Successfully");
            }}
          >
            Submit Your Cake
          </button>
        </>
      )}

      {/* Show Summary Modal */}
      {showModal && (
        <SummaryModal
          selectedOptions={selectedOptions}
          closeModal={() => setShowModal(false)}
          onEdit={handleEdit} // Pass edit functionality
        />
      )}
    </div>
  );
};

export default CustomizedCake;
