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


    // useEffect( () => {
    //     setLoading(true)
    //     P.getPokemonByName(props.name)
    //     .then((response) => {
    //         setStats({
    //             types: response.types.map( (typeItem) => {
    //                 return typeItem.type.name;
    //             }),
    //             front_sprite: response.sprites.front_default,
    //             num: response.id
    //         })
    //     })
    //     setLoading(false)
    // },[])


  return (
    <div className={`m-5 flex flex-col justify-center p-6 items-center text-center bg-${stats.types[0]} rounded-xl w-1/4 h-1/4 hover:border-white hover:border-2`}>
        <img src={ stats.imageURL || "" } alt={`sprite of ${props.name}`}/>
        <h5 className="font-mono text-white"> {props.name }</h5>
    </div>
  )
}

export default InfoCard