// ContactPage.jsx
import React, { useState } from "react";

function ContactPage() {
	const [error, setError] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		reasons: "",
		description: "",
		attachment: null,
	});

	const options = [
		{ value: "Account managment", label: "Account managment" },
		{ value: "bug report", label: "bug report" },
		{ value: "Data and Privacy", label: "Data and Privacy" },
		{ value: "Site Content", label: "Site Content" },
		{ value: "Site Features", label: "Site Features" },
		{
			value: "Technical support and troubleshooting",
			label: "Technical support and troubleshooting",
		},
		{ value: "other", label: "other" },
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.reasons ||
			!formData.description
		) {
			setError(`Please fill in ${formData}fields before submitting the form.`);
			return;
		} else {
			setError("");

			window.prompt("Form submitted, thank you!");
		}
	};

	return (
        <div className="contactRow">
		<div
			className="container contactPage"
		>
			<h1 id="contact" style={{ marginBottom: "20px" }}>
				Contact us{" "}
			</h1>

			{error && <div style={{ color: "red" }}>{error}</div>}

			<form
				style={{ display: "block", textAlign: "center" }}
				onSubmit={handleSubmit}
			>
				<label style={{ display: "block", marginBottom: "10px" }}>
					Name:
					<br />
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						style={{
							width: "100%",
							padding: "8px",
							boxSizing: "border-box",
							marginBottom: "10px",
						}}
					/>
				</label>
				<br />
				
				<label style={{ display: "block", marginBottom: "10px" }}>
					Email:
					<br />
					<input
						type="text"
						name="email"
						value={formData.email}
						onChange={handleChange}
						style={{
							width: "100%",
							padding: "8px",
							boxSizing: "border-box",
							marginBottom: "10px",
						}}
					/>
				</label>
				<br />

				<label style={{ display: "block", marginBottom: "10px" }}>
					Reason for contact:
				</label>				
				<select
					name="reasons"
					value={formData.reasons}
					onChange={handleChange}
					style={{
						width: "100%",
						padding: "8px",
						boxSizing: "border-box",
						marginBottom: "30px",
					}}
				>
					<option>Select..</option>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<br />

				<label style={{ display: "block", marginBottom: "10px" }}>
					Describe the problem with as much detail as possible
					<textarea
						name="description"
						cols="40"
						rows="10"
						value={formData.description}
						onChange={handleChange}
						style={{
							width: "100%",
							padding: "8px",
							boxSizing: "border-box",
							marginBottom: "10px",
						}}
					></textarea>
				</label>
				<label style={{ display: "block", marginBottom: "10px" }}>
					Attachments:
					<input
						type="file"
						name="attachments"
						onChange={handleChange}
						style={{
							width: "100%",
							padding: "8px",
							boxSizing: "border-box",
							marginBottom: "10px",
						}}
					/>
				</label>
				<br />
				<input
					type="submit"
					onChange={handleSubmit}
					style={{
						background: "rgb(3 246 230 / 38%)",
						fontSize: "20px",
						borderRadius: "10px",
						padding: "10px",
					}}
				/>
			</form>
		</div></div>
	);
}
export default ContactPage;
