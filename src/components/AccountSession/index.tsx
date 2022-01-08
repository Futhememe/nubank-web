import { useSession } from "next-auth/react"
import { AnnounceCard, Container, UserInformationContainer } from "./style"

export const AccountSession = () => {
  const {data: session} = useSession();  

  return(
    <Container>
      <UserInformationContainer>
        <h3>Olá, {session?.user?.name}</h3>
        <div>
          <h3>Conta</h3>
          <img src='/eye.svg' alt='show' />
        </div>
        <h1>R$ 1.000,07</h1>
      </UserInformationContainer>

      <AnnounceCard>
        <p>Veja os descontos que preparamos para você no <span>Shopping Nubank</span></p>
      </AnnounceCard>

      <AnnounceCard>
        <p><span>25% de desconto</span> em empréstimo com portabilidade de salário</p>
      </AnnounceCard>
    </Container>
  )
}