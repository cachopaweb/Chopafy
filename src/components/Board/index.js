import React, {useState } from 'react';
import BoardContex from './context';
import { Container } from './styles';
import { loadLists } from '../../Services/Api';
import Lista from '../Lista'; 
import produce from 'immer';

const data = loadLists();

export default function Board() {
  const [lista, setLista] = useState(data);

  function move(fromList, toList, from, to){
    setLista(produce(lista, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      }
    ))
  }

  return (
    <BoardContex.Provider value={{lista, move}}>
      <Container>
        {lista.map((lista, index) =>  <Lista key={lista.title} index={index} data={lista} />)}       
      </Container>
    </BoardContex.Provider>
  );
}
