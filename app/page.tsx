'use client'
import { useEffect, useState, useMemo } from 'react'
import PokeContainer from '@/components/PokeContainer';
import SearchBar from '@/components/SearchBar';
import ModalCard from '@/components/ModalCard';
import { PokemonPreviewData, EMPTY_PREVIEW_DATA } from '@/types/pokeDataTypes';



export default function Home() {
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState<PokemonPreviewData[] | []>([]); //all the pokemon 
  const [searchTerm, setSearchTerm] = useState("")
  const pokemonIdList = Array.from({length: 386}, (_, index) => index + 1)
  const [focusPokemon, setFocusPokemon] = useState<PokemonPreviewData | typeof EMPTY_PREVIEW_DATA>(EMPTY_PREVIEW_DATA)
  
  useEffect( () => {
    Promise.all(pokemonIdList.map((id:number) => {  
      return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return {
          name: data.name,
          imageURL: data.sprites.other['official-artwork'].front_default,
          types: data.types.map((item: any) => {
            return item.type.name
          }),
          stats: data.stats.map((statsObj: any) => {
            return {
              statName : statsObj.stat.name,
              statValue: statsObj.base_stat
            }
          })
        }
      })
    }))
    .then((response) => {
      setPokemonData(response);
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  },[pokemonIdList])

  return (
    <main className="flex flex-col min-h-screen flex-wrap items-center justify-center p-24 sm:p-10">
      <SearchBar handleChange={setSearchTerm} />
        { loading ? <p>  Loading Pokemon </p> : <PokeContainer pokeData={pokemonData.filter((pokemonData) => {
          return pokemonData.name.includes(searchTerm.toLowerCase().trim())
        })} handleFocus={setFocusPokemon}/> 
        }
      <ModalCard name={focusPokemon.name} handleFocus={setFocusPokemon} imgURL={focusPokemon.imageURL} types={focusPokemon.types} stats={focusPokemon.stats}/>
    </main>
  )
}
