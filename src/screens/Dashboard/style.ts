import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Funcionalitys = styled.div`
  display: flex;
  padding: 0 48px 2rem;

  @media(max-width: 720px) {
    padding: 1rem 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 16px;

  margin-left: 40px;

  width: 100%;
  height: 100%;

  @media(max-width: 720px) {
    margin: 0;  
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr 1fr;

    padding: 0 1rem;
  }
`;