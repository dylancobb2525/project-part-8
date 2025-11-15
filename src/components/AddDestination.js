import React, { useState } from 'react';
import '../styles/components-styles/Dialog.css';

const AddDestination = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log("Sending data to server...");
        
        try {
            const response = await fetch("https://travel-server-yn4b.onrender.com/api/destinations", {
                "method": "POST",
                "body": formData
            });

            console.log("Response status:", response.status);

            if (response.status === 200) {
                const newDestination = await response.json();
                console.log("New destination added:", newDestination);
                setResult("Destination added successfully!");
                event.target.reset();
                setPrevSrc("");
                props.closeAddDialog();
                props.updateDestinations(newDestination);
            } else {
                const errorText = await response.text();
                console.error("Error response:", errorText);
                setResult("Error adding destination: " + errorText);
            }
        } catch (error) {
            console.error("Network error:", error);
            setResult("Error: Could not connect to server");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-destination-form" onSubmit={addToServer}>
                        <h3>Add New Bucket List Destination</h3>

                        <p>
                            <label htmlFor="name">Destination Name:</label>
                            <input type="text" id="name" name="name" required minLength="3"></input>
                        </p>

                        <p>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" required minLength="10" rows="4"></textarea>
                        </p>

                        <input type="hidden" name="category" value="Bucket List" />

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc !== "" ? (
                                        <img id="img-prev" src={prevSrc} alt="Preview"></img>
                                    ) : (
                                        ""
                                    )}
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} required />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Add Destination</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDestination;

