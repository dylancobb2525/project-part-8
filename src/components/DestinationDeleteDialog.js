import React, { useState } from 'react';
import '../styles/components-styles/Dialog.css';

const DestinationDeleteDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteFromServer = async (e) => {
        e.preventDefault();
        setResult("Deleting...");

        try {
            const response = await fetch(`https://travel-server-yn4b.onrender.com/api/destinations/${props._id}`, {
                "method": "DELETE"
            });

            if (response.status === 200) {
                setResult("Destination deleted successfully");
                setTimeout(() => {
                    props.hideDestination();
                    props.closeDeleteDialog();
                }, 500);
            } else {
                const errorText = await response.text();
                setResult("Error deleting destination: " + errorText);
            }
        } catch (error) {
            console.error("Network error:", error);
            setResult("Error: Could not connect to server");
        }
    };

    return (
        <>
            <h3>Delete Destination</h3>
            <p>Are you sure you want to delete "{props.name}"?</p>
            <p>This action cannot be undone.</p>
            <div className="dialog-buttons">
                <button onClick={deleteFromServer}>Yes, Delete</button>
                <button onClick={props.closeDeleteDialog}>Cancel</button>
            </div>
            <p>{result}</p>
        </>
    );
};

export default DestinationDeleteDialog;

