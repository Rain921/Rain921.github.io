import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonDetails } from '../utils/api';
import { Button, Card, CardContent, Typography } from '@mui/material';
import styles from '../styles/main.module.scss';
import {PokemonDetails} from "../utils/types";
import {useDispatch, useSelector} from "react-redux";
import { setSelectedType } from "../store/actions";
import {setPaginationStatus} from "../store/reducers";


const PokemonDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');


    const fetchDetails = async () => {
        try {
            setLoading(true);
            const details = await fetchPokemonDetails(id);
            setPokemonDetails(details);
        } catch (error) {
            setError('Error fetching Pokemon details. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, [id]);

    const handleGoBack = () => {
        navigate(-1);
    };
    const handleGoToMainPage = (type: string) => {
        navigate(-1);
        dispatch(setSelectedType(type));
        dispatch(setPaginationStatus(true));
        const disablePagination = type === 'all types';
        dispatch(setPaginationStatus(!disablePagination));
    };

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : pokemonDetails ? (
                <Card style={{ minWidth: 500, margin: 'auto', textAlign: 'center' }}>
                    <CardContent>
                        <Typography variant="h2">{pokemonDetails.name}</Typography>
                        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
                        <div className={styles.PokemonDetailContainer}>
                            <Typography variant="h3">Ходы:</Typography>
                            <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '0' }}>
                                {pokemonDetails?.moves?.map((move, index) => (
                                    <li key={index}>{move}</li>
                                )) || 'Unknown moves'}
                            </ul>
                        </div>
                        <div className={styles.PokemonDetailContainerType}>
                            <Typography variant="h3">Types:</Typography>
                            <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '0' }}>
                                {pokemonDetails?.types?.map((type, index) => (
                                    <li key={index} onClick={() => handleGoToMainPage(type)}>{type}</li>
                                )) || 'Unknown Type'}
                            </ul>
                        </div>
                        <Button variant="contained" onClick={handleGoBack}>
                            Go Back
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div>No details available.</div>
            )}
        </div>
    );
};

export default PokemonDetail;








