'use client'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import  Pokedex, { NamedAPIResource } from 'pokedex-promise-v2';
import PokeContainer from '@/components/PokeContainer';
const P = new Pokedex();

export default function Home() {
  const [pokemonData, setPokemonData] = useState<NamedAPIResource[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    P.getGenerationByName("generation-i")
    .then((response) => {
      setPokemonData(response.pokemon_species);
    })
    .catch(() => {
      console.log('Cannot fetch Gen-i')
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
