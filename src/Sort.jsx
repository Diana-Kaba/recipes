import React, { useState } from "react";

const Sort = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState(null);

  const handleSortChange = (selectedSortBy) => {
    if (selectedSortBy === sortBy) {
      setSortBy(null);
    } else {
      setSortBy(selectedSortBy);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSortChange(sortBy);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-check">
          <input
            type="radio"
            className="form-control form-check-input mt-0 p-1"
            id="sort-by-name"
            value="name"
            checked={sortBy === "name"}
            onChange={() => handleSortChange("name")}
          />
          <label htmlFor="sort-by-name" className="form-check-label">
            Sort by name
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-control form-check-input mt-0 p-1"
            id="sort-by-price"
            value="price"
            checked={sortBy === "price"}
            onChange={() => handleSortChange("price")}
          />
          <label htmlFor="sort-by-price" className="form-check-label">
            Sort by price
          </label>
        </div>
        <button type="submit" className="btn btn-warning mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sort;
