import React from "react";
import useFetch from "../api/useFetchApi";

function TypeList (props) {
    const typeFetch = useFetch("https://pokeapi.co/api/v2/type");
    if (!typeFetch.response) {
        return null;
    }
    return typeFetch.response.results.map((item, index) =>
        <li key={index}>
            <input type="checkbox" value={item.name} onChange={props.manageType}/>
            {item.name}
        </li>
    );
}

export default TypeList;