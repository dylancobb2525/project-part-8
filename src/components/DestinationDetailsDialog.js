import React from 'react';
import { getDestinationImageUrl } from '../utils/imageHelper';
import '../styles/components-styles/Dialog.css';

const DestinationDetailsDialog = (props) => {
    return (
        <>
            <div className="columns">
                <img src={getDestinationImageUrl(props.main_image)} alt={props.name} />
                <div id="dialog-content">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <p>Category: {props.category}</p>
                </div>
            </div>
            <div className="dialog-buttons">
                <button onClick={props.showEdit} style={{backgroundColor: '#2196F3'}}>Edit</button>
                <button onClick={props.showDelete} style={{backgroundColor: '#f44336'}}>Delete</button>
            </div>
        </>
    );
};

export default DestinationDetailsDialog;

