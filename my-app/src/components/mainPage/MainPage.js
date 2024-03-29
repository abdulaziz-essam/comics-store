import './mainpage.css'
import React from 'react'
import {Carousel,Container,Row,Col,Card,Button} from 'react-bootstrap'
import img from '../../img/mainbackground.png'
import img2 from '../../img/spider.png'
import batman from '../../img/batman.png'
export default function MainPage() {
    return (
        <div >
         
        
            <img src={img} alt="" className="background-img" />
            
            <h1 className="shop-name"> comic shop</h1>
        <div className="cards">
            <h1 className="new-arrives">New Arrives</h1>
                <Container >

                    <Row>
                    {/* first card  */}
                        <Col xs >
                            <div className="card">
                                <img src={batman} alt="Avatar" className="background-img"  />
                                    <div className="container">
                                        <h4><b>John Doe</b></h4>
                                        <p>Architect & Engineer</p>
                                    </div>
                            </div>
                        </Col>
                        {/* second card */}
                        <Col xs={{ order: 12 }}>
                      
                        </Col>
                        {/* third card */}
                        <Col xs={{ order: 1 }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
            <div className="coming-cards">
                <h1 className="coming-soon">Coming Soon</h1>
                
                <Container className="coming-container">

                    <Row>
                        {/* first card  */}
                        <Col xs>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={batman} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* second card */}
                        <Col xs={{ order: 12 }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* third card */}
                        <Col xs={{ order: 1 }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
     </div>
    )
}
