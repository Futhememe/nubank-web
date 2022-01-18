import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 24px 48px;

  & > div {
    margin-right: 24px;
  }

  & > div:last-child {
    margin-right: 0;
  }

  @media(max-width: 720px) {
    padding: 24px;
    display: none;
  }
`;