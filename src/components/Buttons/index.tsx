import { HTMLMotionProps, motion } from 'framer-motion';
import { ButtonContainer } from './style';

export const SignInButton = ({...rest}: HTMLMotionProps<'button'>) => {
  return(
    <ButtonContainer 
      type='button'
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      {...rest}
    >
      <img src='/githublogo.svg' alt='github' />
      Login com Github
    </ButtonContainer>
  )
}

export const SignOutButton = ({...rest}: HTMLMotionProps<'button'>) => {
  return (
    <ButtonContainer
      type='button'
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      {...rest}
    >
      Desconectar
    </ButtonContainer>
  )
}