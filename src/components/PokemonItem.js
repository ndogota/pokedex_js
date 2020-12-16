import React from 'react'
import useFetchApi from "../api/useFetchApi";

import './PokemonItem.css'

function PokemonItem (props) {
    let show = false;
    const res = useFetchApi(props.url);

    if (!res.response) {
        return <div>Loading...</div>
    }

    if ((props.type.length + props.move.length) > 0) {
        res.response.types.map((item) => {
            if (props.type.includes(item.type.name)) {
                show = true;
            }
            return null;
        });
        res.response.moves.map((item) => {
            if (props.move.includes(item.move.name)) {
                show = true;
            }
            return null;
        });
    } else {
        show = true;
    }

    if (show === false) {
        return null;
    }

    return (
        <div className='pokemon-item'>
            <img src={res.response.sprites.front_default} alt='Pokemon Images'/>
            <p>ID : {res.response.id}</p>
            <p>NAME : {res.response.name}</p>
            <div>TYPES :
                {res.response.types.map((item, key) =>
                    <span key={key}> {item.type.name}</span>
                )}
            </div>
            <div>MOVES :
                {res.response.moves.map((item, key) =>
                    <span key={key}> {item.move.name}</span>
                )}
            </div>
        </div>
    );
}

export default PokemonItem;