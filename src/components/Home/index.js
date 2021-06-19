import React from 'react';
import './styles.css'
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img1 from './../../assets/Assassins-Creed.jpg';
import Img2 from './../../assets/Guilty_Gear_Xrd_Guilty_Gear.jpg';
import Img3 from './../../assets/tomb-raider-anniversary.jpg';
import Gif1 from './../../assets/cloud.gif';
import Gif2 from './../../assets/Th_Ryu_special_hurricanekick.gif';
import Gif3 from './../../assets/mario3.gif';
import Gif4 from './../../assets/coche-de-carreras.gif';

function Home(){
    return(
        <main>
            <div className="band">
                <h1>¡Los mejores juegos y descuentos en un solo lugar!</h1>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={Img1} alt="Assassins Creed" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Img2} alt="Guilty Gear Xrd" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Img3} alt="Tomb Raider Anniversary" />
                </Carousel.Item>
            </Carousel>
            <section className="sectionBanners">
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card className="banner bg-warning">
                                <Link to="/catalogue">
                                    <Card.Text>
                                        <span>50%<small> Dcto.</small></span><br/>en juegos de <b>Estrategia!</b>
                                    </Card.Text>
                                    <Card.Img variant="top" src={Gif1} alt="Juegos de Estrategia" />
                                </Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="banner bg-danger">
                                <Link to="/catalogue">
                                    <Card.Text>
                                        <span>40%<small> Dcto.</small></span><br/>en juegos de <b>Peleas!</b>
                                    </Card.Text>
                                    <Card.Img variant="top" src={Gif2} alt="Juegos de Peleas" />
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card className="banner bg-primary">
                                <Link to="/catalogue">
                                    <Card.Text>
                                        <span>30%<small> Dcto.</small></span><br/>en juegos de <b>Aventura!</b>
                                    </Card.Text>
                                <Card.Img variant="top" src={Gif3} alt="Juegos de Aventura" />
                            </Link>
                                </Card>
                        </Col>
                        <Col>
                            <Card className="banner bg-success">
                                <Link to="/catalogue">
                                    <Card.Text>
                                        <span>20%<small> Dcto.</small></span><br/>en juegos de <b>Deportes!</b>
                                    </Card.Text>
                                    <Card.Img variant="top" src={Gif4} alt="Juegos de Deportes" />
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Home;