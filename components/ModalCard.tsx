import { PokemonPreviewData, EMPTY_PREVIEW_DATA } from '@/types/pokeDataTypes';
import React from 'react'
import {useState, useMemo} from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

interface PokeFullDetails {
  name: string, 
  desc: string,
  types: string[]
  stats: statValue[]
}

interface statValue{
  statName: string,
  statValue: number
}

interface modalCardProps {
  name: string
  imgURL: string,
  types: string[]
  stats: statValue[]
  handleFocus: (x:PokemonPreviewData) => void
}

const ModalCard = (props: modalCardProps) => {
  const [desc, setDesc] = useState<PokeFullDetails>({
    name: "",
    desc: "",
    types: [],
    stats: props.stats
  })

  useMemo(() => {
    setDesc({
      name: props.name,
      desc: "",
      types: props.types,
      stats: props.stats
    })


  }, [props])
  const [loading, setLoading] = useState(false)

  
  return (props.name == EMPTY_PREVIEW_DATA.name) ? <></> :
  <div className="fixed flex justify-center items-center z-50 visbile w-full overflow-x-hidden overflow-y-hidden md:inset-0 h-[calc(100%-1rem)]  min-h-full  bg-black bg-opacity-75">
    <div className={`flex flex-row bg-${props.types[0]} rounded-2xl h-3/4 overflow-x-auto`}>
        <div>
          <img src={props.imgURL} alt={`image of ${props.name}`}/>
        </div>
        <div className="flex flex-col items-center bg-white m-3 p-3 rounded-2xl">
        <p> {props.name}</p>

        {
          loading ? 
          <p> Loading Pokemon Data...</p>
          :
          <>
            <div className="flex flex-row">
              {
                props.types.map((pokeType: string) => {
                  return <p key={`MODAL_${pokeType}`} className={`bg-${pokeType} m-2 rounded-xl p-2 sm: text-sm`}>
                    {pokeType}
                  </p>
                })
              }
            </div>
                <p> {desc.desc} </p>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <th> Stat name </th>
                      <th> Stat Value </th>
                    </tr>
                    {
                      desc.stats.map((statObj) => {
                        return  (<tr key={statObj.statName}>
                          <td className="text-center">{statObj.statName}</td>
                          <td className="text-center">{statObj.statValue}</td>
                        </tr>)
                      })
                    }
                  </tbody>
                </table>
          </>
        }
        <button 
        className="bottom-2 relative mt-2" 
        onClick={() => {
        props.handleFocus(EMPTY_PREVIEW_DATA)
        }}>
          <AiFillCloseCircle size={30} /> 
        </button>
        
        </div>
        
      </div>
      

  </div>
}

export default ModalCard