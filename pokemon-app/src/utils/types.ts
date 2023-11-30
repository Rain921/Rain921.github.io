
export interface PokemonDetails {
    name: string;
    abilities: string[];
    types: string[];
    sprites: {
        front_default: string;
    };
    moves: string[];
}

export interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: string[];
}

export interface PokemonListResponse {
    results: Pokemon[];
    count: number;
}
export interface PokemonListProps {}
export interface PaginationProps {
    totalPages: number;
}
export interface PaginationState {
    currentPageIndex: number;
    selectedType: string;
    searchTerm: string;
    disablePagination: boolean;
}

export interface PokemonCardProps {
    pokemon: Pokemon;
}
export interface TypeFilterProps {
    onTypeChange: (type: string) => void;
}
export interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (newTerm: string) => void;
}
