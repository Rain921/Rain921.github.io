import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import styles from "./styles/main.module.scss";

const App: React.FC = () => {
    return (
        <Router>
            <div className={styles.App}>
                <Routes>
                    <Route path="/pokemon/:id" element={<PokemonDetail />} />
                    <Route path="/" element={<PokemonList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
