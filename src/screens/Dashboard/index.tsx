import { AccountSession } from "../../components/AccountSession";
import { Header } from "../../components/Header";
import { Container } from "./style"

export const Dashboard = () => {

  return(
    <Container>
      <Header />
      <AccountSession />
    </Container>
  )
}