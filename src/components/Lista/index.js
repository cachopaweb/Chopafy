import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Container } from './styles';
import Card from '../Card';

export default function Lista({ data, index: listIndex }) {
  return (
    <Container>
        <header>
            <h2>{data.title}</h2>
                {data.creatable && (
                <button>
                  <MdAdd size={24} color="#FFF" />
                </button>)}
        </header>
        <ul>
          {data.cards.map((card, index) => 
            <Card 
              index={index} 
              listIndex={listIndex}
              key={card.id} 
              data={card} 
            />)}
        </ul>     
    </Container>
  );
}
