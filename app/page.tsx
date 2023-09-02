'use client'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import  Pokedex, { NamedAPIResource, Pokemon } from 'pokedex-promise-v2';
import PokeContainer from '@/components/PokeContainer';
const P = new Pokedex();

export interface PokemonPreviewData {
  name: string;
  imageURL: string;
  types: string[];
}

export default function Home() {
  const [pokemonData, setPokemonData] = useState<PokemonPreviewData[]>([]);
  const [loading, setLoading] = useState(false);
  const test = Array.from({length: 151}, (_, index) => index + 1)
  test.push(155)

  
  useEffect(() => {
    setLoading(true);
    P.getPokemonByName(test)
    .then((response) => {
      setPokemonData(
        response.map((data: Pokemon) => {
          return {
            name: data.name,
            imageURL: data.sprites.front_default || "",
            types: data.types.map((item) => {
              return item.type.name
            }),
          }
        })
      );
    })
    .catch((error) => {
      console.log('hi');
    })
    setLoading(false)
  },[])


  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      <div>
        {loading ? <p> Loading </p> : <PokeContainer pokeData={pokemonData} /> }
      </div>
      
    </main>
  )
}
