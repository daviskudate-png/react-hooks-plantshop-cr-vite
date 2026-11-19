
import React from "react";

function NewPlantForm({ onAddPlant }) {

  function handleSubmit(event) {
    event.preventDefault();

    // Get the form element
    const form = event.currentTarget.tagName === "FORM"
      ? event.currentTarget
      : event.currentTarget.form;

    const formData = new FormData(form);

    // Create the new plant object
    const newPlant = {
      name: formData.get("name"),
      image: formData.get("image"),
      price: formData.get("price")
    };

    // Send the new plant to PlantPage
    onAddPlant(newPlant);

    // Clear the form
    form.reset();
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          required
        />

        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          required
        />

        <button
          type="button"
          onClick={handleSubmit}
        >
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
