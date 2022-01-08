import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  padding: 22px 48px;

  background-color: ${theme.background};

  img {
    max-width: 44px;
    max-height: 22px;
  }
`;