// SearchBar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ searchTerm, onChange, onSearch }) {
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			onSearch();
		}
	};

	return (
		<div className="p-3 border-bottom mt-10" style={{ width: "100%" }}>
			<div style={{ position: "relative", width: "100%" }}>
        {/* input bar */}
				<input
					type="text"
					placeholder="Search for recipes..."
					value={searchTerm}
					onChange={onChange}
					onKeyDown={handleKeyDown}
					style={{ width: "100%", height: "40px", paddingLeft: "10px" }}
				/>

        {/* search button */}
				<FontAwesomeIcon
					icon={faSearch}
					style={{
						position: "absolute",
						right: "10px",
						top: "50%",
						transform: "translateY(-50%)",
						color: "#888",
						cursor: "pointer",
					}}
					onClick={onSearch}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
