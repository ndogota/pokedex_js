import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import './css/App.css';
import PokemonPage from "./components/PokemonPage";
import PokemonDetailedView from "./components/PokemonDetailedView";

function App() {
    return (
        <Router>
            <div className="App">
                <h1>PokeJS</h1>
                <Switch>
                    <Route exact path="/" component={PokemonPage} />
                    <Route exact path="/detailedview/:name">
                        <PokemonDetailedView />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
