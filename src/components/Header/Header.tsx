import React from 'react';
import BackgroundPattern from './BackgroundPattern';
import ProfileImage from './ProfileImage';
import IntroText from './IntroText';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundPattern />
      <div className="container mx-auto px-6 z-10 py-20">
        <ProfileImage />
        <IntroText />
      </div>
    </header>
  );
};

export default Header;