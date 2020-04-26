import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import './Movie.css';

export default function Movie(props) {


    return (

        <>
            <div className="col">
                <Card style={{ width: '18rem' }} className="h">

                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title className="a">{props.name}</Card.Title>
                        <Card.Text className="a">
                            {props.rating}*
                        </Card.Text>

                    </Card.Body>

                </Card>
            </div>
        </>










    )
}
