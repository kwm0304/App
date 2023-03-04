import React, { useState } from 'ract';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import { Form } from 'react-bootstrap';

import Auth from '../utils/auth';


const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main className='flex-row justify-center mb-4'>
        <h1>Login</h1>
        <Form onSubmit={handleLoginSubmit}>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Control value={formState.email} onChange={handleChange} placeholder='email@email.com' id='email'></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3' controlId='email'>
                <Form.Control value={formState.password} onChange={handleChange} placeholder='******' id='password'></Form.Control>
            </Form.Group>
        </Form>
        {error && <div>Login Failed</div>}
        </main>
    )
}

export default Login;