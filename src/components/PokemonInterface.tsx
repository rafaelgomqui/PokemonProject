type pokemonType = 
{ 
    id: number; 
    name: string; 
    sprites: { front_default: string }; 
    stats: { base_stat: number }[] 
};

export type { pokemonType };