import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

interface HeaderProps {}

export const Header = (props: HeaderProps): JSX.Element => {
	return (
		<Navbar fixed='top' bg='dark' variant='dark' expand='lg'>
			<Container fluid>
				<Navbar.Brand>
					<h1>React-Typescript App</h1>
				</Navbar.Brand>
			</Container>
		</Navbar>
	)
}

export default Header
