import React from 'react';
import useFetchApi from "../api/useFetchApi";
import PokemonItem from "./PokemonItem";

function PokemonSearch (props) {
    let allPokemon = useFetchApi("https://pokeapi.co/api/v2/pokemon?limit=1050");
    const resultPokemon = [];

    if (!allPokemon.response) {
        return null;
    } else {
        allPokemon.response.results.map((item) => {
            if (item.name.search(props.keyword) !== -1) {
                resultPokemon.push(<PokemonItem
                    key={item.name}
                    url={item.url}
                    type={props.type}
                    move={props.move}
                />);
            }
            return null;
        });
    }
    return resultPokemon;
}

export default PokemonSearch;