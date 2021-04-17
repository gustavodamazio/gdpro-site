import styled from 'styled-components';

export const ButtonNeonEffect = styled.button`
  width: 217px;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  color: ${props => props.theme.colors.accent};
  transition: 0.2s;
  border: 0px;
  background-color: rgba(42, 212, 255, 0.2);
  outline: 0px;
  svg {
    margin-left: 10px;
    width: 35px;
    height: 35px;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 15px 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: 18px;
    overflow: hidden;
    color: ${props => props.theme.colors.accent};
  }

  &:hover {
    color: #006680;
    a {
      transition-delay: 1s;
      color: #006680;
    }
    background-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 10px ${props => props.theme.colors.accent},
      0 0 40px ${props => props.theme.colors.accent},
      0 0 80px ${props => props.theme.colors.accent};
    transition-delay: 1s;
  }

    span {
      position: absolute;
      display: block;
    }

    span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent,
        ${props => props.theme.colors.accent}
      );
    }

    span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        180deg,
        transparent,
        ${props => props.theme.colors.accent}
      );
    }

    span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        270deg,
        transparent,
        ${props => props.theme.colors.accent}
      );
    }

    span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        360deg,
        transparent,
        ${props => props.theme.colors.accent}
      );
    }

    &:hover {
      span:nth-child(1) {
        left: 100%;
        transition: 1s;
      }
      span:nth-child(2) {
        top: 100%;
        transition: 1s;
        transition-delay: 0.25s;
      }
      span:nth-child(3) {
        right: 100%;
        transition: 1s;
        transition-delay: 0.5s;
      }
      span:nth-child(4) {
        bottom: 100%;
        transition: 1s;
        transition-delay: 0.75s;
      }
    }
  }
  &:focus:not(:hover) {
    background-color: rgba(42, 212, 255, 0.3);
  }
  &.small {
    margin: 2px;
    width: fit-content;
    a {
      letter-spacing: 1.5px;
      font-size: 10px;
      padding: 7px 10px;
    }
    &:hover {
      box-shadow: 0 0 2.5px ${props => props.theme.colors.accent},
      0 0 10px ${props => props.theme.colors.accent},
      0 0 20px ${props => props.theme.colors.accent};
    }
`;
