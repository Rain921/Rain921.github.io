import React, { useState, useEffect } from 'react';
import styles from '../styles/pokemonCard/PokemonCard.module.scss';
import { fetchPokemon } from '../utils/api';
import {Pokemon as PokemonCardType, PokemonCardProps} from "../utils/types";


const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const { name, types } = pokemon;
    const [details, setDetails] = useState<PokemonCardType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const pokemonDetails = await fetchPokemon(name);
                setDetails(pokemonDetails);
            } catch (error: any) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [name]);


    return (
        <div className={styles.PokemonCardWrapper}>
            {details ? (
                <>
                    <img src={details.image} alt={details.name} />
                    <h2>{details.name}</h2>
                    <p>{details.types.join(', ')}</p>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PokemonCard;
