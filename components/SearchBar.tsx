import React from 'react'

interface searchBarProps {
    handleChange: (x:string) => void
}
const SearchBar = (props: searchBarProps) => {
  return (
    <section className="flex flex-row items-center justify-center mb-2 w-full sticky top-0 z-10 bg-white p-1">
        <h1 className="mr-2 font-mono"> Search Pokemom :</h1>
        <input
        className="border border-black"
        type='text'
        onChange={e => props.handleChange(e.target.value)}
        ></input>
    </section>
  )
}

export default SearchBar