'use client'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import  Pokedex, { NamedAPIResource, Pokemon } from 'pokedex-promise-v2';
import PokeContainer from '@/components/PokeContainer';
import { data } from 'autoprefixer';
import SearchBar from '@/components/SearchBar';
const P = new Pokedex();

export interface PokemonPreviewData {
  name: string;
  imageURL: string;
  types: string[];
}

export default function Home() {
  const [pokemonData, setPokemonData] = useState<PokemonPreviewData[]>([]);
  const [searchTerm, setSearchTerm] = useState("")
  const test = Array.from({length: 1008}, (_, index) => index + 1)

  
  useEffect(() => {
    Promise.all(test.map((id:number) => {  
      return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return {
          name: data.name,
          imageURL: data.sprites.other['official-artwork'].front_default,
          types: data.types.map((item: any) => {
            return item.type.name
          })
        }
      })
    }))
    .then((response) => {
      setPokemonData(response);
    })

  },[])


  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24 sm:p-10">
        <SearchBar handleChange={setSearchTerm} />
        { <PokeContainer pokeData={pokemonData.filter((pokeData) => {
          return pokeData.name.includes(searchTerm.toLowerCase().trim())
        })} /> 
        }
    </main>
  )
}
