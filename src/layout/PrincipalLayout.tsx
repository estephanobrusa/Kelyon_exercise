import React from 'react'
import Header from '../components/header/Header';
import { useLoginStore } from '../store/Store';
import { ButtonStyle, ContainerLayout, NavBar, UserSection } from './PrincipalLayout.style';

type LayoutProps = {
    children: React.ReactNode;
  };

const PrincipalLayout :  React.FC<LayoutProps> = ({children}) => {
  const { user, logout } = useLoginStore((state) => state);

  return (
    <ContainerLayout>
      <NavBar>
      <Header/>
      <UserSection>
        {user?.email && <span>{user.email}</span>}
        <ButtonStyle onClick={() => logout()}>Logout</ButtonStyle>
      </UserSection>

      </NavBar>
     
    
    {children}
    </ContainerLayout>
  )
}

export default PrincipalLayout
