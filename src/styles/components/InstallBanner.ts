import styled from 'styled-components';

export const BannerContainer = styled.div`
  min-height: '40px';
  padding: 10px 50px 10px 50px;
  background-color: #181818;
  box-shadow: 0px 1px 7px 0px rgba(42, 212, 255, 0.2);
  svg {
      width: 20px;
      height: 20px;
      transition: 0.5s;
      &:hover{
        color: #f44336;
      }
  }
`;
