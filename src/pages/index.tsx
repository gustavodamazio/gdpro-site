import { addDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import GdProLogo from '../assets/gd-pro-accent.svg';
import ButtonNeon from '../components/ButtonNeon';
import InstallBanner from '../components/InstallBanner';
import PwaHead from '../components/PwaHead';
import { BeforeInstallPromptEvent } from '../shared/@types/events/BeforeInstallPromptEvent';
import { Container, Content } from '../styles/pages/Home';

export default function Home(): JSX.Element {
  const links = {
    wpp:
      'https://api.whatsapp.com/send?phone=5521993658990&text=Ol%C3%A1%20vim%20pelos%20links%20do%20site%2C%20gostaria%20de%20saber%20sobre%3A%20',
    instagram: 'https://www.instagram.com/gdpro.software/',
    mail:
      'mailto:contato@gdpro.com.br?subject=GD%20PRO%20link%20contato&body=Olá%20vim%20pelo%20link%20do%20site%20minha%20dúvida%20é:',
  };
  const LsKeyPwaRecused = '@GdProPwaRecusedUntil';
  const [
    deferredPrompt,
    setDeferredPrompt,
  ] = useState<BeforeInstallPromptEvent>(null);
  const [showInstallPromotion, setShowInstallPromotion] = useState<boolean>(
    false
  );
  useEffect(() => {
    const pwaRecused = localStorage.getItem(LsKeyPwaRecused);
    if (!pwaRecused || new Date(pwaRecused).getTime() < new Date().getTime()) {
      listenerBeforeInstallPrompt();
      listenerAppInstalled();
    }
  }, []);

  function listenerBeforeInstallPrompt() {
    window.addEventListener(
      'beforeinstallprompt',
      (e: BeforeInstallPromptEvent) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        setDeferredPrompt(e);
        // Update UI notify the user they can install the PWA
        setShowInstallPromotion(true);
        // Optionally, send analytics event that PWA install promo was shown.
        console.log(`'beforeinstallprompt' event was fired.`);
      }
    );
  }

  function listenerAppInstalled() {
    window.addEventListener('appinstalled', () => {
      // Hide the app provided install promotion
      setShowInstallPromotion(false);
      // Clear the deferredPrompt so it can be garbage collected
      setDeferredPrompt(null);
      // Optionally, send analytics event to indicate successful install
      console.log('PWA was installed');
    });
  }

  function openExternalLink(url: string) {
    window.open(url, '_blank');
  }

  async function handleShowInstallPromotion(mode: 'close' | 'install') {
    // Hide the app provided install promotion
    setShowInstallPromotion(false);
    if (mode === 'close') {
      localStorage.setItem(
        LsKeyPwaRecused,
        addDays(new Date(), 5).toISOString()
      );
    }
    if (mode === 'install') {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      // Optionally, send analytics event with outcome of user choice
      console.log(`User response to the install prompt: ${outcome}`);
      // We've used the prompt, and can't use it again, throw it away
      setDeferredPrompt(null);
    }
  }
  return (
    <Container>
      <PwaHead />
      <InstallBanner
        showInstallPromotion={showInstallPromotion}
        handleShowInstallPromotion={handleShowInstallPromotion}
      />
      <Content>
        <div className="logo">
          <GdProLogo />
          <h1>PRO</h1>
        </div>
        <ButtonNeon
          icon={FaWhatsapp}
          label="WhatsApp"
          onClick={() => openExternalLink(links.wpp)}
          linkSeo={links.wpp}
        ></ButtonNeon>
        <ButtonNeon
          icon={FaInstagram}
          label="Instagram"
          onClick={() => openExternalLink(links.instagram)}
          linkSeo={links.instagram}
        ></ButtonNeon>
        <ButtonNeon
          icon={FiMail}
          label="Email"
          onClick={() => openExternalLink(links.mail)}
          linkSeo={links.mail}
        ></ButtonNeon>
        <p>
          Nosso objetivo é ajudar empresas que pensam grande implementando
          diferencias e automatizando suas tarefas com tecnologia.
        </p>
      </Content>
    </Container>
  );
}
