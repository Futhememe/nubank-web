import { motion } from 'framer-motion';
import { ButtonContainer } from './style';

export const SignInButton = () => {
  return(
    <ButtonContainer 
      type='button'
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
    >
      <img src='/githublogo.svg' alt='github' />
      Login com Github
    </ButtonContainer>
  )
}