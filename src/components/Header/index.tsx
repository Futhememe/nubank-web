import { signOut } from "next-auth/react"
import { SignOutButton } from "../Buttons"
import { Container } from "./style"

export const Header = () => {
  return (
    <Container>
      <img src='/nubanklogo.svg' alt='nubank' />

      <SignOutButton onClick={() => signOut()} />
    </Container>
  )
}