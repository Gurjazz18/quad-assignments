
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
export const Moviebook = ({ movie }) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(movie?.show?.name);
    const [price, setPrice] = useState('250');
    const [cname, setCname] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        let bookingData = {
            movieName: name,
            moviePrice: price,
            customername: cname
        }

        localStorage.setItem("bookingData", JSON.stringify(bookingData))
        handleClose();
    };
    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                book-ticket
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Movie Ticket Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Movie-Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="customerPrice">
                            <Form.Label>CustomerName:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" value={cname} onChange={(e) => setCname(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Book ticket
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}





