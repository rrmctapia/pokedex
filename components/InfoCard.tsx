import React from 'react'
import {useState, useEffect} from 'react'
import  Pokedex from 'pokedex-promise-v2';
import Image from 'next/image';
import { PokemonPreviewData } from '@/app/page';

interface pokemonDetails {
    name: string;
    url: string;
}

const P = new Pokedex();


const InfoCard = (props: PokemonPreviewData) => {
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState<PokemonPreviewData>( {
        types: props.types,
        imageURL: props.imageURL,
        name: props.name
    });



  return (
      <div className={`flex flex-col m-1 items-center text-center bg-${props.types[0]} rounded-xl w-1/5 h-1/4 hover:border-white hover:border-2`}>
        <button onClick={() => stats.name == "fuecoco" ? console.log('fucking  stupid') : console.log("fucking gottem")}>
          <img src={ stats.imageURL || "" } alt={`sprite of ${props.name}`}/>
            <div className="bg-white w-full flex-col flex items-center rounded-md">
              <h5 className="font-mono text-black"> {props.name }</h5>
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