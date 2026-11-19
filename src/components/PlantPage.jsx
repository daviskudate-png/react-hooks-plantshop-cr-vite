
import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Store all plants
  const [plants, setPlants] = useState([]);

  // Store the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from the server
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Add a new plant
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then((response) => response.json())
      .then((newPlantFromServer) => {
        setPlants((currentPlants) => [
          ...currentPlants,
          newPlantFromServer
        ]);
      });
  }

  // Filter plants based on search input
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Total plants:", plants.length);
console.log("Filtered plants:", filteredPlants.length);

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search onSearchChange={setSearchTerm} />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
