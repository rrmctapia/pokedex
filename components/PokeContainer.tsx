import React from 'react'
import InfoCard from './InfoCard'
import { PokemonPreviewData } from '@/types/pokeDataTypes';
import { useState, useMemo } from 'react'
interface pokeContainerProps {
    pokeData: PokemonPreviewData[]
    handleFocus: (x:PokemonPreviewData) => void
}

const PokeContainer = (props: pokeContainerProps) => {
  const [pokemonToView, setPokemonToView] = useState<PokemonPreviewData[]>([])
  useMemo(() => {
    setPokemonToView(props.pokeData)
  },[props.pokeData])

  return (
    <section id="pokemon-section" className={`flex flex-row flex-wrap p-9 ${props.pokeData.length <= 0 ? "bg-red-500" : "bg-gray-300"} min-w-full items-center rounded-md justify-between`}>
      { props.pokeData.length <= 0 ? 
      <p>
        There seem to be no pokemon matching that search, are you sure that is what you meant? 
      </p> : 
        props.pokeData.map((pokemon: PokemonPreviewData) => {
            return <InfoCard key={pokemon.name} singlePokemonPreviewData={{name: pokemon.name, imageURL: pokemon.imageURL, types: pokemon.types, stats: pokemon.stats}} handleFocus={props.handleFocus} />
        })}
    </section>
  )
}

export default PokeContainer