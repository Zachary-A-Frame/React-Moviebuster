import { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserContext from "../UserContext"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const { currUser, setCurrUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        setCurrUser({})
        navigate("/login")
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Moviebuster</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/login" onClick={handleLogout}>Logout</Nav.Link>
                    <Nav.Link href="#">{currUser.username}</Nav.Link>
                    <Nav.Link href="#">Score: {currUser.score}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header