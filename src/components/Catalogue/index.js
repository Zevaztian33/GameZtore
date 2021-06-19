import React, { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles.css';
import { AddCartContext } from './../../context/AddCartContext'

function Catalogue(){
    const {addCart, setAddCart} = useContext(AddCartContext)
    const [ games, setGames ] = useState([])
    useEffect(() =>{
        getGames()
    }, [])
    const getGames = async () => {
        const data = await fetch('https://www.cheapshark.com/api/1.0/deals')
        const listGames = await data.json()
        setGames(listGames)
    }

    return(
        <div className="catalogue">
            {games.map(info => (   
                <div className="list py-3 d-inline-block">
                    <div className="container text-center">
                        <Card key={info.id}>
                            <Card.Img variant="top" src={info.thumb} alt={info.title} />
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                <Card.Text><b>USD ${info.normalPrice}</b></Card.Text>
                                <Button variant="success" onClick={ () => setAddCart( addCart + 1) }>
                                    Añadir al <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Catalogue;