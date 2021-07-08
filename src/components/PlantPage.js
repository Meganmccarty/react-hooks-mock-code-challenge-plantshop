import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
    const [plants, setPlants] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('http://localhost:6001/plants')
        .then(response => response.json())
        .then(data => setPlants(data))
    }, [])
    
    function addNewPlant(value) {
        const newPlantArray = [...plants, value]
        setPlants(newPlantArray);
    }

    function deletePlant(id) {
        const newPlantArray = plants.filter(plant => plant.id !== id);
        setPlants(newPlantArray);
    }

    function patchPlant(updatedPlant) {
        const newPlantArray = plants.map(plant => {
            if (plant.id === updatedPlant.id) {
                return updatedPlant
            } else {
                return plant
            }
        })
        setPlants(newPlantArray);
    }

    function handleSearch(value) {
        setSearch(value)
    }

    return (
        <main>
            <NewPlantForm addNewPlant={addNewPlant} />
            <Search search={search} onSearch={handleSearch} />
            <PlantList plants={plants} searchTerm={search} onDelete={deletePlant} onPatch={patchPlant}/>
        </main>
    );
}

export default PlantPage;
