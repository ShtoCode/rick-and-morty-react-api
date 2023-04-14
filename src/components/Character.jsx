import React from "react";

const Character = ({character}) => {
return (
    <div className="text-center p-5">
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </div>
  );
};
export default Character;
