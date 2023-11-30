import axios from 'axios';
import {Pokemon, PokemonDetails, PokemonListResponse} from "./types";

const BASE_URL = 'https://pokeapi.co/api/v2';



export const fetchPokemonDetails = async (name: string | undefined): Promise<PokemonDetails> => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
        const { sprites, types, abilities, moves } = response.data;

        return {
            name: response.data.name,
            sprites: { front_default: sprites.front_default },
            types: types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
            abilities: abilities.map((abilityInfo: { ability: { name: string } }) => abilityInfo.ability.name),
            moves: moves.map((moveInfo: { move: { name: string } }) => moveInfo.move.name),
        };
    } catch (error) {
        throw new Error(`Error fetching details for ${name}. Please try again later.`);
    }
};

export const fetchPokemonList = async (page: number, type: string = '', disablePagination: boolean): Promise<PokemonListResponse> => {
    try {
        let limit = disablePagination ? 100 : 20;

        const response = await axios.get(`${BASE_URL}/pokemon`, {
            params: { offset: (page - 1) * limit, limit: limit, type: type },
        });

        const pokemonList = await Promise.all(
            response.data.results.map(async (pokemon: { name: string }) => {
                return await fetchPokemonDetails(pokemon.name);
            })
        );

        const transformedPokemonList: Pokemon[] = pokemonList.map((pokemonDetails, index) => ({
            id: index + 1,
            name: pokemonDetails.name,
            image: pokemonDetails.sprites.front_default,
            types: pokemonDetails.types,
        }));

        return { results: transformedPokemonList, count: response.data.count };
    } catch (error) {
        throw new Error('Error fetching Pokemon list. Please try again later.');
    }
};

export const fetchPokemon = async (name: string): Promise<Pokemon> => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
        const { sprites, types } = response.data;

        return {
            id: response.data.id,
            name: response.data.name,
            image: sprites.front_default,
            types: types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
        };
    } catch (error) {
        throw new Error(`Error fetching details for ${name}. Please try again later.`);
    }
};

export const fetchPokemonTypes = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/type/');
        const types = response.data.results.map((type: { name: string }) => type.name);
        return ['All Types', ...types];
    } catch (error) {
        console.error('Error fetching Pokemon types:', error);
        throw error;
    }
};
