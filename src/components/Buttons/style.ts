import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ButtonContainer = styled(motion.button)`
  padding: 0.5rem 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;

  border: none;

  font-weight: 600;

  font-size: 0.75rem;

  img {
     margin-right: 10px;
  }
`;

export const IconButtonContainer = styled(motion.button)`
  display: flex;

  align-items: center;
  justify-content: center;

  border: none;

  background: transparent;
`;