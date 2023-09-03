import { NamedAPIResource } from 'pokedex-promise-v2'
import React from 'react'
import InfoCard from './InfoCard'
import { PokemonPreviewData } from '@/app/page'

interface pokeContainerProps {
    pokeData: PokemonPreviewData[]
}

const PokeContainer = (props: pokeContainerProps) => {
  console.log(props.pokeData.length)

  return (
    <section id="pokemon-section" className={`flex flex-row flex-wrap p-9 ${props.pokeData.length <= 0 ? "bg-red-500" : "bg-gray-300"} min-w-full items-center rounded-md justify-between`}>
      { props.pokeData.length <= 0 ? 
      <p>
        There seem to be no pokemon matching that search, are you sure that is what you meant? 
      </p> : 
        props.pokeData.map((pokemon: PokemonPreviewData) => {
            return <InfoCard key={pokemon.name} name={pokemon.name} imageURL={pokemon.imageURL} types={pokemon.types} />
        })}
    </section>
  )
}

export default PokeContainer