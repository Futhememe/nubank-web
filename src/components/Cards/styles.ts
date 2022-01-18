import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { BarStyleProps, DotStyleProps } from './types';

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

export const BasicContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  padding: 21px;

  border-radius: 10px;

  box-shadow: 0px 2px 3px rgba(50, 50, 50, 0.25);

  width: 100%;
  height: 100%;

  background-color: ${theme.white};
`;

export const CreditHeader = styled(motion.div)`
  display: flex;
  width: 100%;

  align-items: center;

  img {
    margin-right: 8px;
  }

  p {
    font-size: 0.875rem;
    font-weight: 500;
  }

  p:last-child {
    font-weight: 400;
    color: ${theme.darkGray};

    span {
      font-weight: 500;
    }
  }

  & > span {
    margin: 0 8px;
  }
`;

export const CreditContent = styled(motion.div)`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  margin: 24px 0;

  @media(max-width: 720px) {
    flex-direction: column;

    & > div {
      margin-top: 1rem;
    }

    & > div:first-child {
      margin: 0;
    }
  } 
`;

export const Box = styled(motion.div)`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
  }

  div {

    p {
      font-weight: 500;
      font-size: 0.875rem;
      color: ${theme.darkGray};
    }
  }
`;

export const Dot = styled.span<DotStyleProps>`
  width: 6px;
  height: 6px;

  border-radius: 6px;

  background-color: ${(props) => props.color};
`;

export const BarContainer = styled.div`
  display: flex;
  position: relative;

  height: 7px;
  width: 100%;

  background-color: ${theme.orange};
  border-radius: 7px;

  overflow: hidden;
`;

export const Bar = styled(motion.div)<BarStyleProps>`
  display: flex;
  height: 7px;
  position: absolute;

  background-color: ${(props) => props.color};
  width: ${(props) => props.porcentage}%;
`;

