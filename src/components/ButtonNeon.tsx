import React from 'react';
import { IconType } from 'react-icons';

import { ButtonNeonEffect } from '../styles/components/ButtonNeonEffect';
import { StartCenterRow } from '../styles/helpers/flex';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  icon?: IconType;
  linkSeo?: string;
}

export default function ButtonNeon(props: Props): JSX.Element {
  return (
    <ButtonNeonEffect className={props.className} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <StartCenterRow>
        {props.icon ? <props.icon></props.icon> : null}
        <a href={props.linkSeo} onClick={event => event.preventDefault()}>
          {props.label}
        </a>
      </StartCenterRow>
    </ButtonNeonEffect>
  );
}
