import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import Image from "react-bootstrap/Image";
import testPic from '../assets/123.png'
import {fetchOneDevice} from "../http/deviceAPI";

const Basket = () => {
    const [basketDevice, setBasketDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setBasketDevice(data))
    }, [])

    return (
        <Container>
            <h1 className="mt-4">Корзина</h1>
            <Row>
            <img className='image2' width={500} height={700} src={testPic}/>
                <Col md={4}>
                    <Image width={400} height={300} src={process.env.REACT_APP_API_URL + basketDevice.img}/>
                </Col>
                <Col md={6}>
                    <div
                        className="d-flex flex-column "
                        style={{fontSize: 32}}
                    >
                        <div>Цена на товар:</div>
                        <div>{basketDevice.price} руб.</div>
                        <Col md={10}>
                <h4>Характеристики товара</h4>
                {basketDevice.info.map((info, index) =>
                    <div key={info.id}
                          style={{background: index % 2 === 0 ? 'lightblue' : 'transparent', padding: 0}}>
                        {info.title}: {info.description}
                    </div>
                )}
                </Col>
                       
                    </div> 
                    <Button onClick={() => alert("Ждите звонка")} style={{margin:'20px'}} variant={"outline-info"}>Оплатить</Button>
                </Col>
            </Row>


        </Container>
    );
};

export default Basket;

