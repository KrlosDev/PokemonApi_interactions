import React, { useState, useEffect, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PokemonCard from "./components/PokemonCards";
import PokeLoader from "./components/PokeLoader";

const App = () => {
  const [allData, setAllData] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const initState = useRef(true);

  useEffect(() => {
    if (initState.current) {
      initState.current = false;
      return;
    }
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=8`
      );
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokeResponse = await fetch(pokemon.url);
          const pokemonData = await pokeResponse.json();
          return {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            image: pokemonData.sprites.other["official-artwork"].front_default,
            types: pokemonData.types.map((type) => type.type.name),
            number: pokemonData.id,
          };
        })
      );
      setAllData((prevData) => {
        return [...prevData, ...pokemonDetails];
      });
      setPokemonData(pokemonDetails);
    };
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [offset]);

  const handleShowMore = () => {
    setLoading(true);
    setOffset(offset + 8);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="heading">
        P<i></i>kemon
      </h1>
      {loading ? (
        <PokeLoader />
      ) : (
        <div
          style={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {pokemonData.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}

      <button onClick={handleShowMore}>Catch the next set...</button>
    </div>
  );
};

export default App;
