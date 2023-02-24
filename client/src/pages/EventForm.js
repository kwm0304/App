import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const EventForm = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='eventFirst'>
                <Form.Label>First Name *</Form.Label>
                <Form.Control type='text' placeholder='First' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='eventLast'>
                <Form.Label>Last Name *</Form.Label>
                <Form.Control type='text' placeholder='Last' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='eventAdd'>
                <Form.Label>Address *</Form.Label>
                <Form.Control type='text' placeholder='Address' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='eventStart'>
                <Form.Label>Start Time</Form.Label>
                <Form.Control type='time' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='eventEnd'>
                <Form.Label>End Time</Form.Label>
                <Form.Control type='time' />
            </Form.Group>

            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    )
}

export default EventForm;