import React, { useState, useCallback } from "react";
import { Card } from "./card";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const style = {
  width: 400,
};

export interface Item {
  id: string;
  text: string;
}

interface Props {
  items: Item[];
}

export const DraggableListContainer: React.FC<Props> = ({ items }) => {
  {
    const [cards, setCards] = useState(items);

    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );

    return (
      <DndProvider backend={HTML5Backend}>
        <div style={style}>
          {cards.map(({ id, text }, i) => (
            <Card key={id} index={i} id={id} text={text} moveCard={moveCard} />
          ))}
        </div>
      </DndProvider>
    );
  }
};
