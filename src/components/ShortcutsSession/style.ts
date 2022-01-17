import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;

  align-items: center;
  justify-content: center;

  padding: 24px 48px;

  & > div {
    margin-right: 24px;
  }

  @media(max-width: 720px) {
    padding: 24px;
    display: none;
  }
`;