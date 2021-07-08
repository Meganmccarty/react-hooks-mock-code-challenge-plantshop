import React, { useState } from "react";

function PlantCard({ id, name, image, price, onDelete, onPatch }) {
    const [isInStock, setIsInStock] = useState(true)
    const [newPrice, setNewPrice] = useState("")

    function handleClick() {
        setIsInStock(!isInStock);
    }

    function handleDelete() {
        fetch(`http://localhost:6001/plants/${id}`, {
            method: 'DELETE',
        });

        onDelete(id);
    }

    function handleChange(e) {
        setNewPrice(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'price': newPrice
            })
        }
        fetch(`http://localhost:6001/plants/${id}`, configObj)
            .then(response => response.json())
            .then(data => onPatch(data))
            .catch(error => console.log(error))
    }

    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            {isInStock ? (
                <button className="primary" onClick={handleClick}>In Stock</button>
            ) : (
                <button onClick={handleClick}>Out of Stock</button>
            )}
            <button onClick={handleDelete}>Delete</button>
            <form onSubmit={handleSubmit}>
                <input type="number" name="price" value={newPrice} onChange={handleChange} step="0.01" placeholder="Price" />
                <button type="submit">Update Price</button>
            </form>
        </li>
    );
}

export default PlantCard;
