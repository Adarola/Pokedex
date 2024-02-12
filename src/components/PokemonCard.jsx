import { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonCard({ pokeId }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then((res) => {
      const pokemon = res.data;
      console.log(pokemon);
      setPokemon(pokemon);
    });
  }, [pokeId]);

  return (
    <>
      {pokemon ? (
        <div className="card" onClick={test}>
          <img src={pokemon.sprites.front_default} alt="Pokemon"></img>
          <div className="pokemon-name">
            {capitalizePokemonName(pokemon.name)}
          </div>
          {pokemon.types.length === 2 ? (
            <>
              <div>{displayPokemonType(pokemon.types[0].type.name)}</div>
              <div>{displayPokemonType(pokemon.types[1].type.name)}</div>
            </>
          ) : (
            <div>{displayPokemonType(pokemon.types[0].type.name)}</div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function test() {
  alert("Test");
}

function capitalizePokemonName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function displayPokemonType(type) {
  switch (type) {
    case "normal":
      return (
        <img src="/assets/pokemon-types/Normal.png" alt="Normal type"></img>
      );

    case "fighting":
      return (
        <img src="/assets/pokemon-types/Fighting.png" alt="Fighting type"></img>
      );

    case "flying":
      return (
        <img src="/assets/pokemon-types/Flying.png" alt="Flying type"></img>
      );

    case "dark":
      return <img src="/assets/pokemon-types/Dark.png" alt="Dark type"></img>;

    case "bug":
      return <img src="/assets/pokemon-types/Bug.png" alt="Bug type"></img>;

    case "grass":
      return <img src="/assets/pokemon-types/Grass.png" alt="Grass type"></img>;

    case "fairy":
      return <img src="/assets/pokemon-types/Fairy.png" alt="Fairy type"></img>;

    case "psychic":
      return (
        <img src="/assets/pokemon-types/Psychic.png" alt="Psychic type"></img>
      );

    case "fire":
      return <img src="/assets/pokemon-types/Fire.png" alt="Fire type"></img>;

    case "water":
      return <img src="/assets/pokemon-types/Water.png" alt="Water type"></img>;

    case "electric":
      return (
        <img src="/assets/pokemon-types/Electric.png" alt="Electric type"></img>
      );

    case "ice":
      return <img src="/assets/pokemon-types/Ice.png" alt="Ice type"></img>;

    case "poison":
      return (
        <img src="/assets/pokemon-types/Poison.png" alt="Poison type"></img>
      );

    case "rock":
      return <img src="/assets/pokemon-types/Rock.png" alt="Rock type"></img>;

    case "ground":
      return (
        <img src="/assets/pokemon-types/Ground.png" alt="Ground type"></img>
      );

    case "ghost":
      return <img src="/assets/pokemon-types/Ghost.png" alt="Ghost type"></img>;

    case "steel":
      return <img src="/assets/pokemon-types/Steel.png" alt="Steel type"></img>;

    case "dragon":
      return (
        <img src="/assets/pokemon-types/Dragon.png" alt="Dragon type"></img>
      );

    default:
      break;
  }
}
