import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  padding: 24px 48px;

  background-color: ${theme.primary};
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 0.875rem;
    color: ${theme.white};
    font-weight: 500;
  }

  h1 {
    font-size: 1.125rem;
    color: ${theme.white};
    font-weight: 700;

    margin-top: 0.25rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 0.5rem;

    min-width: 190px;


    img {
      width: 18px;
      height: 18px;
    }
  }
`;

export const AnnounceCard = styled.div`
  display: flex;
  align-items: center;

  max-width: 247px;
  min-height: 80px;

  padding: 1rem;
  margin-left: 3rem;

  border-radius: 10px;

  background-color: ${theme.purpleGray};

  p {
    font-size: 0.75rem;
    color: ${theme.black};
    line-height: 24px;
  }

  span {
    color: ${theme.primary}
  }
`;