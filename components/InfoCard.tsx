import React from 'react'
import {useState, useEffect} from 'react'
import  Pokedex from 'pokedex-promise-v2';
import Image from 'next/image';
import { PokemonPreviewData } from '@/types/pokeDataTypes';

interface infoCardProps {
  singlePokemonPreviewData: PokemonPreviewData,
  handleFocus: (x:PokemonPreviewData) => void
}

const InfoCard = (props: infoCardProps) => {
    const [stats, setStats] = useState<PokemonPreviewData>( {
        types: props.singlePokemonPreviewData.types,
        imageURL: props.singlePokemonPreviewData.imageURL,
        name: props.singlePokemonPreviewData.name,
        stats: props.singlePokemonPreviewData.stats
    });



  return (
      <div className={`flex flex-col m-1 items-center text-center bg-${stats.types[0]} rounded-xl w-1/5 h-1/4 hover:border-white hover:border-2`}>
        <button onClick={() => props.handleFocus(stats)}>
          <img src={ stats.imageURL || "" } alt={`sprite of ${stats.name}`}/>
            <div className="bg-white w-full flex-col flex items-center rounded-md">
              <h5 className="font-mono text-black"> {stats.name }</h5>
              <div className="flex flex-row">
                {
                  stats.types.map((value:string) => {
                    return <p className={`bg-${value} m-2 rounded-xl p-2 sm: text-sm` } key={stats.name + "_" + value} > {value}</p>
                  })
                }
              </div>
            </div>
        </button>
      </div>
  )
}

export default InfoCard