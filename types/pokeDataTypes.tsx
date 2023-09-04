export interface PokemonPreviewData {
    name: string;
    imageURL: string;
    types: string[];
    stats: statValue[]
  }
  
  export const EMPTY_PREVIEW_DATA: PokemonPreviewData = {
    name: "",
    imageURL: "",
    types: [],
    stats: []
  }

  export interface statValue{
    statName: string,
    statValue: number
  }