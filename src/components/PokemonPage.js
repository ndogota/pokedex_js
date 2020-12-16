import React, { useState, useEffect, useCallback } from 'react';
import PokemonList from "./PokemonList";
import PokemonSearch from "./PokemonSearch";
import TypeList from "./TypeList"
import MoveList from "./MoveList";

function PokemonPage() {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(50);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageID, setPageID] = useState(0);
    const [page, setPage] = useState(null);
    const [search, setSearch] = useState(false);
    const [keyword, setKeyword] = useState(false);
    const [type, setType] = useState([]);
    const [move, setMove] = useState([]);

    useEffect(() => {
        if (search === true && keyword === false) {
            setPage(<PokemonList
                key={pageID}
                offset={offset}
                limit={limit}
                type={type}
                move={move}
            />);
        } else if (search === true && keyword) {
            setPage(<PokemonSearch
                key={pageID}
                keyword={keyword}
                type={type}
                move={move}
            />);
        } else {
            setPage(<PokemonList
                key={pageID}
                offset={offset}
                limit={limit}
                type={type}
                move={move}
            />);
        }
    }, [type, move, search, keyword, pageID, offset, limit]);

    const nextPage = useCallback(async () => {
        setSearch(false);
        if (offset + limit >= 1050) {
            return;
        }
        setPageID(pageID + 1);
        setPageNumber(pageNumber + 1);
        setOffset(offset + limit);
    }, [pageID, pageNumber, limit, offset]);

    const previousPage = useCallback(async () => {
        setSearch(false);
        if (offset < limit) {
            return;
        }
        setPageID(pageID + 1);
        setPageNumber(pageNumber - 1);
        setOffset(offset - limit);
    }, [pageID, pageNumber, limit, offset]);

    const changeLimit = useCallback( async (e) => {
        setSearch(false);
        setLimit(parseInt(e.target.value));
        setPageID(pageID + 1);
    }, [pageID])

    const changeSearch = useCallback(async (e) => {
        setSearch(true);
        setPageID(pageID + 1);
        setKeyword(e.target.value);
    }, [pageID]);

    const manageType = useCallback(async (e) => {
        setSearch(true);
        setPageID(pageID + 1);
        if (type.includes(e.target.value)) {
            setType(type.filter(function(a) { return a !== e.target.value }));
        } else {
            setType(type => [...type, e.target.value]);
        }
    }, [pageID, type]);

    const manageMove = useCallback(async (e) => {
        setSearch(true);
        setPageID(pageID + 1);
        if (move.includes(e.target.value)) {
            setMove(move.filter(function(a) { return a !== e.target.value }));
        } else {
            setMove(move => [...move, e.target.value]);
        }
    }, [pageID, move]);

    return (
        <div>
            <div>
                <input type="text" placeholder="Search for a Pokemon" onChange={changeSearch} onCancel={() => setSearch(false)}/>
                <input type="number" min="1" max="50" step="1" defaultValue="50" placeholder="20" onChange={changeLimit}/>
                <button id="previous-btn" onClick={previousPage}>
                    Previous
                </button>
                <button id="next-btn" onClick={nextPage}>
                    Next
                </button>
                <p>Type : </p>
                <TypeList
                    manageType={manageType}
                />
                <p>Move : </p>
                <MoveList
                    manageMove={manageMove}
                />
            </div>
            <p>PokeJS</p>
            <p>{pageNumber}</p>
            {page}
        </div>
    );
}

export default PokemonPage;