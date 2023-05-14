import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

interface HeaderProps {

}

export const Header = (props: HeaderProps):JSX.Element => {
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand>
                React-Typescript App
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default Header;