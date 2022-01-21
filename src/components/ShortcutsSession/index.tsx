import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ShortcutCard } from "../Cards";
import { Container } from "./style";

const options = [
  {
    index: 0,
    title: 'Área pix',
    icon: <img src='/pix.svg' />
  },
  {
    index: 1,
    title: 'Pagar',
    icon: <img src='/barcode.svg' />
  },
  {
    index: 2,
    title: 'Transferir',
    icon: <img src='/transfer.svg' />
  },
  {
    index: 3,
    title: 'Depositar',
    icon: <img src='/deposit.svg' />
  },
  {
    index: 4,
    title: 'Pegar emprestado',
    icon: <img src='/money.svg' />
  },
  {
    index: 5,
    title: 'Recarga de celular',
    icon: <img src='/mobile.svg' />
  },
  {
    index: 6,
    title: 'Doação',
    icon: <img src='/money.svg' />
  },
]

export const ShortcutsSession = () => {
  return(
    <div>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="shortcut" direction="horizontal">
          {(provided, snapshot) => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {options.map(option => (
                <Draggable
                  key={option.index}
                  draggableId={String(option.index)}
                  index={option.index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ShortcutCard 
                        title={option.title}
                        icon={option.icon}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}