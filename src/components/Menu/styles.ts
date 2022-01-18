import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  background-color: ${theme.white};

  box-shadow: 0px 0px 23px -1px rgba(0, 0, 0, 0.1);

  min-width: 316px;
  padding: 1rem 2rem;

  border-radius: 10px;

  & > div:first-child {
    border: none;
  }

  @media(max-width: 720px) {
    display: none;
  }
`;

export const Option = styled(motion.div).attrs({ whileHover: { x: 7 } })`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  border-top: 1px solid ${theme.lightGray};
  padding: 16px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;


    img {
      margin-right: 8px;
    }

    p {
      font-size: 0.875rem;
      color: ${theme.darkGray};
      font-weight: 500;
    }
  }
`;