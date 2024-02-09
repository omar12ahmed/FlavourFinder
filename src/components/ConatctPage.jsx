import React, { useState } from "react"

function ContactPage() {


    const [error, setError]=useState("")
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            reasons: "",
            description: "",
            attachment: null
        });


    const options = [
        { value: "Account managment", label: "Account managment" },
        { value: "bug report", label: "bug report" },
        { value: "Data and Privacy", label: "Data and Privacy" },
        { value: "Site Content", label: "Site Content" },
        { value: "Site Features", label: "Site Features" },
        { value: "Technical support and troubleshooting", label: "Technical support and troubleshooting" },
        { value: "other", label: "other" },

    ]


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name|| !formData.email|| !formData.reasons|| !formData.description){
            setError(`Please fill in ${formData}fields before submitting the form.`)
            return;
        }else{
            setError("")

            window.prompt("Form submitted, thank you!")
        }
        

    }


    return (
        <div className="contactPage">

            {error && <div style={{color:"red"}}>{error}</div>}

        <form style={{display:"block"}}
        onSubmit={handleSubmit}>
            <label>
                Name:
                <br />
                <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
            </label>
            <br />
            <label>
                Email:
                <br/>
                <input type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
            </label>
            <br />
            <label>
                Reason for contact:
            </label>
            <br/>
            <select name="reasons"
                value={formData.reasons}
                onChange={handleChange}
                >
                <option>Select..</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                    ))}

            </select>
            <label> Describe the problem with as much detail as possible
                <textarea name="description" cols="40" rows="10"
                value={formData.description}
                onChange={handleChange}
                ></textarea>
            </label>
            <label> Attachments:</label>
            <input type="file" name="attachments" 
            onChange={handleChange}
            />
            <br />
            <input type="submit"
            onChange={handleSubmit} />

        </form>

                </div>
    )


}
export default ContactPage