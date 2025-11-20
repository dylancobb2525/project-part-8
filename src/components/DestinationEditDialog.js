import React, { useState, useEffect } from 'react';
import '../styles/components-styles/Dialog.css';
import { getDestinationImageUrl } from '../utils/imageHelper';

const DestinationEditDialog = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");
    const [formData, setFormData] = useState({
        name: props.name,
        description: props.description
    });

    useEffect(() => {
        setFormData({
            name: props.name,
            description: props.description
        });
        setPrevSrc(getDestinationImageUrl(props.main_image));
    }, [props]);

    const uploadImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPrevSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const updateToServer = async (event) => {
        event.preventDefault();
        setResult("Updating...");

        // Client-side validation matching server Joi validation
        if (formData.name.length < 3) {
            setResult("Error: Destination name must be at least 3 characters");
            return;
        }

        if (formData.description.length < 10) {
            setResult("Error: Description must be at least 10 characters");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("category", props.category);
        
        const imageInput = event.target.querySelector('input[type="file"]');
        if (imageInput && imageInput.files[0]) {
            formDataToSend.append("img", imageInput.files[0]);
        }
        
        try {
            const response = await fetch(`https://travel-server-yn4b.onrender.com/api/destinations/${props._id}`, {
                "method": "PUT",
                "body": formDataToSend
            });

            if (response.status === 200) {
                const updatedDestination = await response.json();
                setResult("Destination updated successfully");
                setTimeout(() => {
                    props.updateDestination(updatedDestination);
                    props.closeEditDialog();
                }, 500);
            } else {
                const errorText = await response.text();
                setResult("Error updating destination: " + errorText);
            }
        } catch (error) {
            console.error("Network error:", error);
            setResult("Error: Could not connect to server");
        }
    };

    return (
        <>
            <form id="edit-destination-form" onSubmit={updateToServer}>
                <h3>Edit Destination</h3>

                <p>
                    <label htmlFor="name">Destination Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        minLength="3" />
                </p>

                <p>
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        value={formData.description}
                        onChange={handleChange}
                        required 
                        minLength="10" 
                        rows="4" />
                </p>

                <section className="columns">
                    <div>
                        <p id="img-prev-section">
                            {prevSrc !== "" ? (
                                <img id="img-prev" src={prevSrc} alt="preview"></img>
                            ) : (
                                ""
                            )}
                        </p>
                    </div>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                    </p>
                </section>

                <p>
                    <button type="submit">Update</button>
                </p>
                <p>{result}</p>
            </form>
        </>
    );
};

export default DestinationEditDialog;

