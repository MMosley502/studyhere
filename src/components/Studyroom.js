import React from "react";

function Studyroom({name, description, available, signed}) { 
    return  (
        <div className="study-space border rounded-lg p-4 m-2 shadow-sm bg-white" >
            <h2>{name}</h2>
            <p>{description}</p>
            <p> 
                Status:{" "}
                <strong style={{ color: available ? "green" : "red"}}> 
                    {available ? "Available" : "Full"}
                </strong>
            </p>
            <p>Spots taken: {signed}</p>
        </div>
    );
}

export default Studyroom;