import { NamedAPIResource } from 'pokedex-promise-v2'
import React from 'react'
import InfoCard from './InfoCard'

interface pokeContainerProps {
    pokeData: NamedAPIResource[]
}

const PokeContainer = (props: pokeContainerProps) => {

  return (
    <section id="pokemon-section" className="flex flex-row flex-wrap justify-between">
        {props.pokeData.map((pokemon: NamedAPIResource) => {
            return <InfoCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        })}
    </section>
  )
}

export default PokeContainer