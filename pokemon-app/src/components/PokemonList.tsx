import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';
import TypeFilter from './TypeFilter';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentPageIndex, setSearchTerm, setPaginationStatus } from '../store/reducers';
import { fetchPokemonList } from '../utils/api';
import styles from '../styles/main.module.scss';
import { Pokemon, PokemonListProps } from '../utils/types';
import { setSelectedType } from '../store/actions';
import { setPokemonList } from "../store/reducersPokemonList";


const PokemonList: React.FC<PokemonListProps> = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPageIndex = useSelector((state: RootState) => state.pagination.currentPageIndex);
    const selectedType = useSelector((state: RootState) => state.pagination.selectedType);
    const pokemonList = useSelector((state: RootState) => state.pokemonList.list);
    const [totalPages, setTotalPages] = useState<number>(0);
    const searchTerm = useSelector((state: RootState) => state.pagination.searchTerm);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const disablePagination = useSelector((state: RootState) => state.pagination.disablePagination);

    const fetchData = async (page: number, type = '', disablePagination: boolean) => {
        try {
            setLoading(true);
            let limit = disablePagination ? 100 : 20;
            let data = await fetchPokemonList(page, type,disablePagination);
            dispatch(setPokemonList(data.results))
            setTotalPages(disablePagination ? 1 : Math.ceil(data.count / limit));
            setError('');
        } catch (error) {
            dispatch(setPokemonList([]))
            setError('Error fetching Pokemon list. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearchChange = (newTerm: string) => {
        dispatch(setSearchTerm(newTerm));
        dispatch(setCurrentPageIndex(1));

        fetchData(1, selectedType, disablePagination);
    };

    const handleTypeChange = (type: string) => {
        const newType = type === 'all types' ? 'all types' : type;
        if (newType != null) {
            dispatch(setSelectedType(newType));
        }
        dispatch(setCurrentPageIndex(1));
        const disablePagination = newType === 'all types';
        dispatch(setPaginationStatus(!disablePagination));
        fetchData(1, newType, true);
    };

    useEffect(() => {
        fetchData(currentPageIndex, selectedType, disablePagination);
        const searchParams = new URLSearchParams(location.search);
        const pageParam = searchParams.get('page');
        if (pageParam) {
            dispatch(setCurrentPageIndex(parseInt(pageParam, 10)));
        }
    }, [currentPageIndex, selectedType, location.search, dispatch, disablePagination]);

    let filteredPokemonList = pokemonList
        .filter((pokemon: { name: string; }) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((pokemon: { types: string | string[]; }) => selectedType === '' || (selectedType === 'all types' ? true : pokemon.types.includes(selectedType.toLowerCase())));

    if (!disablePagination) {
        filteredPokemonList = filteredPokemonList.filter((pokemon: { types: string | string[]; }) =>
            selectedType === '' || (selectedType === 'all types' ? true : pokemon.types.includes(selectedType.toLowerCase()))
        );
    }

    return (
        <div className={styles.MainContent}>
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <TypeFilter onTypeChange={handleTypeChange} />
            {loading ? (
                <div className={styles.Loading}>Loading...</div>
            ) : error ? (
                <div className={styles.Error}>{error}</div>
            ) : filteredPokemonList.length === 0 ? (
                <div className={styles.Error}>No Pokemon found.</div>
            ) : (
                <div className={styles.PokemonListWrapper}>
                    {filteredPokemonList.map((pokemon: Pokemon) => (
                        <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                            <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        </Link>
                    ))}
                </div>
            )}
            <Pagination totalPages={totalPages} />
        </div>
    );
};

export default PokemonList;















