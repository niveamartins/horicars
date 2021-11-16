import {MdHome} from 'react-icons/md';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

export function Menu() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <MdHome/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}