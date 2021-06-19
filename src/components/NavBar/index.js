import React, { useState, useContext } from 'react';
import './styles.css'
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { AddCartContext } from './../../context/AddCartContext'

function NavBar() {
    const {addCart} = useContext(AddCartContext)
    const MySwal = withReactContent(Swal);
    const message = () => {
        MySwal.fire({
            text: 'Aún no esta en funcionamiento, disculpe las molestias',
            icon: 'error'
        })
    };
    const [ stateLogin, setStateLogin ] = useState(false);
    const login = () => {
        setStateLogin(!stateLogin);
        if(stateLogin === false){
            MySwal.fire({
                text: 'Bienvenido',
                icon: 'success'
            })
        } else{
            MySwal.fire({
                text: 'Hasta luego',
                icon: 'success'
            })
        }
    };
    function LoginButton() {
        return (
            <Button className="ml-lg-5" variant="info" onClick={login}>Ingresar</Button>
        );
    };
    function LogoutButton(){
        return(
            <Nav className="ml-auto d-flex flex-row justify-content-around">
                <div className="nav-icons">
                    <Link to="/" className="text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                        </svg>
                    </Link>
                </div>
                <div className="nav-icons">
                    <Link className="text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </Link>
                </div>
                <div className="nav-icons">
                    <Link className="text-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg> : {addCart} items
                    </Link>
                </div>
                <Button variant="info" onClick={login}>Salir</Button>
            </Nav>    
        )
    };

    return(
        <div>
            <Navbar className="navBar" bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/">
                        <Image className="logo" src={Logo}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline className="ml-auto my-sm-2">
                            <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
                            <Button variant="info" className="my-2" onClick={message}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </Button>
                        </Form>
                        { stateLogin ? <LogoutButton/> : <LoginButton/> }
                    </Navbar.Collapse>
                </Navbar>
        </div>
    )
}
export default NavBar;