import { NamedAPIResource } from 'pokedex-promise-v2'
import React from 'react'
import InfoCard from './InfoCard'
import { PokemonPreviewData } from '@/app/page'

interface pokeContainerProps {
    pokeData: PokemonPreviewData[]
}

const PokeContainer = (props: pokeContainerProps) => {

  return (
    <section id="pokemon-section" className="flex flex-row flex-wrap justify-between bg-gray-500">
        {props.pokeData.map((pokemon: PokemonPreviewData) => {
            return <InfoCard key={pokemon.name} name={pokemon.name} imageURL={pokemon.imageURL} types={pokemon.types} />
        })}
    </section>
  )
}

export default PokeContainer