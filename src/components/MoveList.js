import React from "react";
import useFetch from "../api/useFetchApi";

function MoveList (props) {
    const moveFetch = useFetch("https://pokeapi.co/api/v2/move?limit=813");
    if (!moveFetch.response) {
        return null;
    }
    return moveFetch.response.results.map((item, index) =>
        <li key={index}>
            <input type="checkbox" value={item.name} onChange={props.manageMove}/>
            {item.name}
        </li>
    );
}

export default MoveList;