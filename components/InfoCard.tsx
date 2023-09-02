import React from 'react'
import {useState, useEffect} from 'react'
import  Pokedex from 'pokedex-promise-v2';
import Image from 'next/image';

interface pokemonDetails {
    name: string;
    url: string;
}

interface pokemonStats {
    types: string[],
    front_sprite: string | null,
    num: number

}

const P = new Pokedex();


const InfoCard = (props: pokemonDetails) => {
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState<pokemonStats>( {
        types: [],
        front_sprite: "",
        num: 0
    });


    useEffect( () => {
        setLoading(true)
        P.getPokemonByName(props.name)
        .then((response) => {
            setStats({
                types: response.types.map( (typeItem) => {
                    return typeItem.type.name;
                }),
                front_sprite: response.sprites.front_default,
                num: response.id
            })
        })
        setLoading(false)
    },[])


  return (
    <div className={`m-5 flex flex-col justify-center items-center text-center bg-${stats.types[0]} rounded-xl w-1/4 h-1/4`}>
        <img src={ stats.front_sprite || "" } alt={`sprite of ${props.name}`}/>
        <h5> {"#" + stats.num + " "  + props.name }</h5>
    </div>
  )
}

export default InfoCard