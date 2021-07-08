import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm, onDelete, onPatch }) {

    const plantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(plant => {
        return (
            <PlantCard
                key={plant.id}
                id={plant.id}
                name={plant.name}
                image={plant.image}
                price={plant.price}
                onDelete={onDelete}
                onPatch={onPatch}
            />
        )
    })

    return (
        <ul className="cards">{plantsToDisplay}</ul>
    );
}

export default PlantList;
