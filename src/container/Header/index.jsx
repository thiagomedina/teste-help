import React from 'react';
import Search from '../Search'
import { ContainerHeader, HeaderContent, Profile } from './styles';

const Header = () => {
  return (
    <ContainerHeader>
      <HeaderContent>
        <Profile>
          <div>
            <span>Bem Vindo!</span>
          </div>
        </Profile>
        <Search/>
      </HeaderContent>
    </ContainerHeader>
  );
};

export default Header;
