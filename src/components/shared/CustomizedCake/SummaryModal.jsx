
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SummaryModal = ({ selectedOptions, onEdit }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="summary-modal-overlay">
      <div className="summary-modal">
        <h2>Order Summary</h2>
        <div className="summary-content">
          <p className="summary-item">
            <strong>Flavor:</strong> {selectedOptions.flavor}
          </p>
          <p className="summary-item">
            <strong>Size:</strong> {selectedOptions.size}
          </p>
          <p className="summary-item">
            <strong>Cake Color:</strong> {selectedOptions.cakeColor}
          </p>
          <p className="summary-item">
            <strong>Icing Type:</strong> {selectedOptions.icingType}
          </p>
          <p className="summary-item">
            <strong>Toppings:</strong>{" "}
            {selectedOptions.toppings.length > 0
              ? selectedOptions.toppings.join(", ")
              : "None"}
          </p>
        </div>
        <div className="modal-actions">
          <button className="edit-button" onClick={onEdit}>
            Edit
          </button>
          <button
            className="close-button"
            onClick={() => navigate("/")} // Redirect to home page
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
