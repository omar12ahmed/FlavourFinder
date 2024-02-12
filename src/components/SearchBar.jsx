// SearchBar.jsx
import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function SearchBar({ searchTerm, onChange, onSearch }) {
	const inputRef = useRef(null);

	useEffect(() => {
		// Focus the input field
		inputRef.current.focus();
	}, []);

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			onSearch();
		}
	};

	return (
		<div className="pt-3 px-3" style={{ width: "100%" }}>
			<div style={{ position: "relative", width: "100%" }}>
				{/* input bar */}
				<input
					ref={inputRef}
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
