import React, {useState} from 'react'
import Studyroom from "./Studyroom"

function Studylist({spaces}) {
  return (
    <div className="study-list">
        {spaces.map(space => (
            <Studyroom 
            key={space.id}
            name={space.name}
            description={space.description}
            available={space.available}
            signed={0}
            />
        ))}
    </div>
  );
}
export default Studylist
