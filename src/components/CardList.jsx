import PokemonCard from "./PokemonCard";

export default function CardList() {
  let pokeList = [];

  for (let i = 1; i < 55; i++) {
    pokeList.push(<PokemonCard pokeId={i} />);
  }

  return <div className="card-row">{pokeList}</div>;
}
