import { AccountSession } from "../../components/AccountSession";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { ShortcutsSession } from "../../components/ShortcutsSession";
import { Container, Funcionalitys } from "./style"

export const Dashboard = () => {

  return(
    <Container>
      <Header />
      <AccountSession />
      <ShortcutsSession />
      <Funcionalitys>
        <Menu />
      </Funcionalitys>
    </Container>
  )
}