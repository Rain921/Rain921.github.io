import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import styles from '../styles/main.module.scss';
import { useNavigate } from 'react-router-dom';
import { SearchBarProps } from "../utils/types";
import { fetchPokemonList } from '../utils/api';

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    const navigate = useNavigate();
    const [allPokemonNames, setAllPokemonNames] = useState<string[]>([]);

    useEffect(() => {
        const fetchAllPokemonNames = async () => {
            try {
                const { results } = await fetchPokemonList(1, '', true);
                const names = results.map((pokemon) => pokemon.name);
                setAllPokemonNames(names);
            } catch (error) {
                console.error('Error fetching Pokemon names:', error);
            }
        };

        fetchAllPokemonNames();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const trimmedValue = event.currentTarget.value.trim();
        onSearchChange(trimmedValue);
        if (allPokemonNames.includes(trimmedValue)) {
            navigate(`/pokemon/${trimmedValue}`);
        }
    };

    return (
        <div className={styles.SearchBarWrapper}>
            <TextField
                id="searchField"
                label="Search Pokemon by Name"
                variant="outlined"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;


