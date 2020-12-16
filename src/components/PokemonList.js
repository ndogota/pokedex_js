import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom';

import PokemonItem from "./PokemonItem";
import useFetchApi from "../api/useFetchApi";
import PokemonDetailedView from "./PokemonDetailedView";

function PokemonList (props) {
    let urlApi;
    if (props.type.length > 0 || props.move.length > 0) {
        urlApi = "https://pokeapi.co/api/v2/pokemon?limit=1050";
    }
    else {
        urlApi = "https://pokeapi.co/api/v2/pokemon?offset=" + props.offset + "&limit=" + props.limit;
    }

    let res = useFetchApi(urlApi);

    if (!res.response) {
        return null;
    }

    return res.response.results.map(((item) =>
            <BrowserRouter>
                <Link to={"/detailedview/" + item.name} onClick={() => {window.location.href="/detailedview/" + item.name}}>
                    <PokemonItem
                        key={item.name}
                        keyword={props.keyword}
                        url={item.url}
                        type={props.type}
                        move={props.move}
                    />
                </Link>
            </BrowserRouter>
       ));
}

export default PokemonList;