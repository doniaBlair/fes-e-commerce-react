import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
	return (
        <div className="book__ratings">
            {
                new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon key={index} icon="star" />)
            }
            {
                !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />
            }
        </div>
    )
};

export default Rating;
