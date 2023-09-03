import React from 'react'
import {useState, useEffect} from 'react'

interface PokeFullDetails {
  name: string, 
  desc: string,
}

interface modalCardProps {
  name: string
  handleFocus: (x:string) => void
}

const ModalCard = (props: modalCardProps) => {
  const [data, setData] = useState<PokeFullDetails>({
    name: "",
    desc: ""
  })

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.name}`)
    .then((response)=> response.json())
    .then((data) => {
      console.log(data.flavor_text_entries[0].flavor_text)
      setData({
        name: props.name,
        desc: data.flavor_text_entries[0].flavor_text
      })
    }
    ).catch((error) => {
      console.log(error)
    })
  }, [props.name])

  return props.name == "" ? <></> :
      <div>
      <p> {props.name}</p>
      <p> {data.desc} </p>
      <button onClick={() => props.handleFocus("")}> X  </button>
      </div>

}

export default ModalCard