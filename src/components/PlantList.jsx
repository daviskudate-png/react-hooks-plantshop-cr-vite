
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <div>
      <h2>Our Plants ({plants.length})</h2>

      <ul className="cards">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
