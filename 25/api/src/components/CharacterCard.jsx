import React from 'react'

function CharacterCard({characters}) {
  return (
     <div className='characterContainer' >
      {characters.map((character) => (
        <div className='characterCard' key={character.id} >
            <h3> {character.name} </h3>
            <img src={character.image} alt="personaje" />
            <p> {character.status} </p>
            <p> {character.species} </p>
            <p> {character.location.name} </p>
        </div>
      ) )}
    </div>
  )
}

export default CharacterCard
