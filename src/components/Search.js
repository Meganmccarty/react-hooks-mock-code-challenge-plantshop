import React from "react";

function Search({ search, onSearch }) {

    function handleSearch(e) {
        onSearch(e.target.value)
    }

    console.log(search)

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Plants:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={search}
                onChange={(e) => handleSearch(e)}
            />
        </div>
    );
}

export default Search;
