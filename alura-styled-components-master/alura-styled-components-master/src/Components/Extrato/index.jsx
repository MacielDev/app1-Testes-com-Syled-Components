import React from 'react';
import { Box } from '../UI/index';
import { extratoLista } from '../../info'
import Items from '../Items'


export function Extrato(){
  return (
   <Box>
    {extratoLista.updates.map(({id,type,from,value, date}) => {
      return(
        <Items 
        key={id}
        type={type}
        from={from}
        value={value}
        date={date} />
      )
    })}
    <button>
      Ver mais
    </button>
   </Box>
  )
}
