import React, { useState } from 'react';
import '../styles/components-styles/Dialog.css';
import DestinationDetailsDialog from './DestinationDetailsDialog';
import DestinationEditDialog from './DestinationEditDialog';
import DestinationDeleteDialog from './DestinationDeleteDialog';

const DestinationDialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    };

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    };

    return (
        <div id="destination-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeDestinationDialog}
                    >
                        &times;
                    </span>
                    <div id="destination-dialog-content">
                        {showContent === "details" ? (
                            <DestinationDetailsDialog 
                                showEdit={showEdit}
                                showDelete={showDelete} 
                                name={props.name}
                                description={props.description}
                                category={props.category}
                                main_image={props.main_image}
                            />
                        ) : showContent === "edit" ? (
                            <DestinationEditDialog 
                                _id={props._id}
                                name={props.name}
                                description={props.description}
                                category={props.category}
                                main_image={props.main_image}
                                closeEditDialog={props.closeDestinationDialog}
                                updateDestination={props.updateDestination} 
                            />
                        ) : (
                            <DestinationDeleteDialog 
                                _id={props._id}
                                name={props.name}
                                closeDeleteDialog={props.closeDestinationDialog}
                                hideDestination={props.hideDestination} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDialog;

