import React from "react";
import { ShortcutCard } from "../Cards";
import { Container } from "./style";

export const ShortcutsSession = () => {
  return(
    <Container>
      <ShortcutCard 
        title='Área pix' 
        icon={<img src='/pix.svg' />}
      />
      <ShortcutCard 
        title='Pagar' 
        icon={<img src='/barcode.svg' />}
      />
      <ShortcutCard 
        title='Transferir' 
        icon={<img src='/transfer.svg' />}
      />
      <ShortcutCard 
        title='Depositar' 
        icon={<img src='/deposit.svg' />}
      />
      <ShortcutCard 
        title='Pegar emprestado' 
        icon={<img src='/money.svg' />}
      />
      <ShortcutCard 
        title='Recarga de celular' 
        icon={<img src='/mobile.svg' />}
      />
      <ShortcutCard 
        title='Doação' 
        icon={<img src='/money.svg' />}
      />
    </Container>
  )
}