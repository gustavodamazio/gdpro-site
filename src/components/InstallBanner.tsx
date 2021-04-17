import React from 'react';
import { FiX } from 'react-icons/fi';
import { BannerContainer } from '../styles/components/InstallBanner';
import { CenterRowWrap } from '../styles/helpers/flex';
import ButtonNeon from './ButtonNeon';
import { Transition } from 'react-transition-group';

export default function InstallBanner({
  showInstallPromotion,
  handleShowInstallPromotion,
}: {
  showInstallPromotion: boolean;
  handleShowInstallPromotion: (mode: 'close' | 'install') => void;
}): JSX.Element {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={showInstallPromotion} timeout={2000}>
      {state => (
        <BannerContainer
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <CenterRowWrap style={{ gap: 18 }}>
            <div style={{ position: 'absolute', left: 15, cursor: 'pointer' }}>
              <FiX onClick={() => handleShowInstallPromotion('close')}></FiX>
            </div>
            <div>
              <div>
                <strong style={{ fontSize: '14px' }}>GD PRO</strong>
              </div>
              <div>
                <span style={{ fontSize: '11px' }}>
                  Obtenha nosso aplicativo.
                </span>
              </div>
            </div>
            <ButtonNeon
              label="Instalar"
              className="small"
              onClick={() => {
                handleShowInstallPromotion('install');
              }}
            ></ButtonNeon>
          </CenterRowWrap>
        </BannerContainer>
      )}
    </Transition>
  );
}
