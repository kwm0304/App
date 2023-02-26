import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTime from 'react-datetime'
import { Form } from 'react-bootstrap';
import Autocomplete, { useJsApiLoader } from '@react-google-maps/api'

export default function ({isOpen, onClose, onEventAdded}) {
    const [change,handleChange] = useState('')
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })

    /**@type React.MutableRefObject<HTMLInputElelement> */
    const originRef = useRef()
    /**@type React.MutableRefObject<HTMLInputElelement> */
    const destinationRef = useRef()

    if (!isLoaded) return <div>Loading...</div>
    
    const onSubmit = (event) => {
        event.preventDefault()

        onEventAdded({
            title,
            customer_first,
            customer_last,
            start,
            end,
            address,
            from,
            price,
            payment_type
        })
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="eventTitle" >
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder='delivery' value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="customerFirst">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="First" value={customer_first} onChange={e => handleChange(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="customerLast">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Last" value={customer_last} onChange={e => handleChange(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="startTime">
                    <Form.Label>Start Time:</Form.Label>
                    <Form.Control><DateTime value={start} onChange={date => setStart(date)} /></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="endTime">
                    <Form.Label>End Time:</Form.Label>
                    <Form.Control><DateTime value={end} onChange={date => setEnd(date)} /></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Start Address:</Form.Label>
                    <Autocomplete><Form.Control type="text" placeholder="123 4th St." ref={originRef} /></Autocomplete>
                    <Form.Label>End Address:</Form.Label>
                    <Autocomplete><Form.Control type="text" placeholder="123 4th St." ref={destinationRef} value={address}/></Autocomplete>
                </Form.Group>

                <Form.Group className="mb-3" controlId="fromStore">
                    <Form.Label>Pick up from:</Form.Label>
                    <Form.Control type="text" placeholder="Traditions" value={from} onChange={e => handleChange(e.target.value)}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='price'>
                    <Form.Label>$</Form.Label>
                    <Form.Control type='number' value={price} onChange={e => handleChange(e.target.value)} />
                </Form.Group>

                <Form.Select aria-label="paymentMethod">
                    <option>Cash</option>
                    <option>Check</option>
                    <option>Card</option>
                    <option>Other</option>
                </Form.Select>
            </Form>
        </Modal>
    )
}