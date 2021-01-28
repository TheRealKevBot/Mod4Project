import React from 'react'

export default function PetsCard(props) {

    return (
        <div className="animal-card">
            <h1>{props.animals.name}</h1>
            <img src={props.animals.image} className="animal-img"/>
            <h2 className="name">Species: {props.animals.animal_type}</h2>
            <h3 className="breed">Breed: {props.animals.breed}</h3>
        </div>
    )
}
