export const getPokemonImageURL = (pokemonId: number) =>
    `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;

export const formatPokemonTypes = (types: string[]) => types.join(', ');

export const getPokemonIdFromURL = (url: string) => {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
};