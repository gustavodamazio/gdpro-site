import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    margin-left: 75px;
    color: ${props => props.theme.colors.secondary};
    margin-top: 5px;
  }
  p {
    text-align: center;
    margin: 1rem 1rem 1rem 1rem;
    margin-top: 24px;
    font-size: 15px;
    font-weight: 500;
    line-height: 32px;
    max-width: 600px;
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
