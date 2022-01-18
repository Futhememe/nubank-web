import { AccountSession } from "../../components/AccountSession";
import { CreditCard } from "../../components/Cards";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { ShortcutsSession } from "../../components/ShortcutsSession";
import { Container, Funcionalitys, Grid } from "./style"

export const Dashboard = () => {

  return(
    <Container>
      <Header />
      <AccountSession />
      <ShortcutsSession />
      <Funcionalitys>
        <Menu />
        <Grid>
          <CreditCard />
        </Grid>
      </Funcionalitys>
    </Container>
  )
}