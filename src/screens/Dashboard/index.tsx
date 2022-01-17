import { AccountSession } from "../../components/AccountSession";
import { Header } from "../../components/Header";
import { ShortcutsSession } from "../../components/ShortcutsSession";
import { Container } from "./style"

export const Dashboard = () => {

  return(
    <Container>
      <Header />
      <AccountSession />
      <ShortcutsSession />
    </Container>
  )
}