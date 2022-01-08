import { useSession } from "next-auth/react";
import { Header } from "../../components/Header";
import { Container } from "./style"

export const Dashboard = () => {
  const {data: session} = useSession();

  return(
    <Container>
      <Header />
    </Container>
  )
}