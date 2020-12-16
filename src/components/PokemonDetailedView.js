import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import useFetch from "../api/useFetchApi";

function PokemonDetailedView (props) {
    let { name } = useParams();
    const pokemonFetch = useFetch("https://pokeapi.co/api/v2/pokemon/" + name);
    if (!pokemonFetch.response) {
        return (<div>
            <a href="/">Return</a>
            <h1>Loading...</h1>
        </div>);
    }
    console.log(pokemonFetch.response);
    return (
        <div>
            <a href="/">Return</a>
            <h1>Name : {name}</h1>
            <img src={pokemonFetch.response.sprites.front_default} alt='Pokemon Images'/>
            <img src={pokemonFetch.response.sprites.front_female} alt='Pokemon Images'/>
            <img src={pokemonFetch.response.sprites.front_shiny} alt='Pokemon Images' />
            <p>Id : {pokemonFetch.response.id}</p>
            <p>Height : {pokemonFetch.response.height / 10} m</p>
            <p>Weight : {pokemonFetch.response.weight / 10} kg</p>
            <div>TYPES :
                {pokemonFetch.response.types.map((item, key) =>
                    <span key={key}> {item.type.name}</span>
                )}
            </div>
            <div>MOVES :
                {pokemonFetch.response.moves.map((item, key) =>
                    <span key={key}> {item.move.name}</span>
                )}
            </div>
        </div>
    )
}

export default PokemonDetailedView;