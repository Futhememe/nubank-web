import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

export const ShortcutContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;


  flex-direction: column;

  width: 151px;
  height: 131px;

  padding: 14px;

  background-color: ${theme.white};

  border-radius: 10px;

  box-shadow: 0px 0px 23px -1px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 71px;
    width: 71px;

    border-radius: 71px;

    background-color: ${theme.lightGray};
  }

  p {
    line-height: 1.5rem;
    margin-top: 8px;
    font-weight: 500;
    font-size: 0.75rem;
    color: ${theme.darkGray}
  }
`;